// Grammar Agent - OpenAI Integration
// No tracking, no data storage except API key

const GRAMMAR_CORRECTION_PROMPT = `You are a professional writing assistant specializing in grammar, logic, and clarity. Your task is to:

1. **Grammar & Mechanics**: Correct all grammar, spelling, punctuation, and syntax errors
2. **Logical Flow**: Fix logical inconsistencies, contradictions, and unclear reasoning in the text
3. **Sentence Structure**: Improve sentence structure for better readability and coherence
4. **Context & Clarity**: Ensure ideas flow naturally and make sense in context
5. **Consistency**: Maintain consistent tense, perspective, and style throughout
6. **Word Choice**: Replace awkward or incorrect word usage with appropriate alternatives
7. **Tone Preservation**: Keep the original tone and meaning while improving clarity

If the text has logical issues (contradictions, missing steps in reasoning, unclear cause-effect relationships), fix them while preserving the author's intent.

Please return ONLY the corrected and improved version without any explanations, comments, or markup:`;

// DOM Elements
let apiKeyInput, saveApiKeyBtn, inputText, outputText, correctBtn, copyBtn;
let charCount, settingsBtn, apiSection, clearInputBtn;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  // Get DOM elements
  apiKeyInput = document.getElementById('apiKey');
  saveApiKeyBtn = document.getElementById('saveApiKey');
  inputText = document.getElementById('inputText');
  outputText = document.getElementById('outputText');
  correctBtn = document.getElementById('correctBtn');
  copyBtn = document.getElementById('copyBtn');
  charCount = document.getElementById('charCount');
  settingsBtn = document.getElementById('settingsBtn');
  apiSection = document.getElementById('apiSection');
  clearInputBtn = document.getElementById('clearInputBtn');

  // Load saved API key
  const saved = await chrome.storage.local.get(['apiKey']);
  if (saved.apiKey) {
    apiKeyInput.value = saved.apiKey;
  } else {
    // Show API section if no key is saved
    apiSection.style.display = 'block';
  }

  // Event listeners
  if (settingsBtn) {
    settingsBtn.addEventListener('click', toggleSettings);
  }
  if (saveApiKeyBtn) {
    saveApiKeyBtn.addEventListener('click', saveApiKey);
  }
  if (correctBtn) {
    correctBtn.addEventListener('click', correctGrammar);
  }
  if (clearInputBtn) {
    clearInputBtn.addEventListener('click', clearInput);
  }
  if (copyBtn) {
    copyBtn.addEventListener('click', copyToClipboard);
  }
  if (inputText) {
    inputText.addEventListener('input', updateCharCount);
  }

  // Initial char count
  updateCharCount();
});

// Toggle settings panel
function toggleSettings() {
  if (apiSection.style.display === 'none') {
    apiSection.style.display = 'block';
  } else {
    apiSection.style.display = 'none';
  }
}

// Save API key to storage
async function saveApiKey() {
  const apiKey = apiKeyInput.value.trim();
  
  if (!apiKey) {
    apiKeyInput.classList.add('error');
    apiKeyInput.placeholder = 'API key is required';
    setTimeout(() => {
      apiKeyInput.classList.remove('error');
      apiKeyInput.placeholder = 'Enter your OpenAI API Key (sk-...)';
    }, 2000);
    return;
  }

  if (!apiKey.startsWith('sk-')) {
    apiKeyInput.classList.add('error');
    apiKeyInput.value = '';
    apiKeyInput.placeholder = 'Invalid key - must start with sk-';
    setTimeout(() => {
      apiKeyInput.classList.remove('error');
      apiKeyInput.placeholder = 'Enter your OpenAI API Key (sk-...)';
    }, 2000);
    return;
  }

  try {
    await chrome.storage.local.set({ apiKey });
    // Hide settings after saving
    apiSection.style.display = 'none';
  } catch (error) {
    console.error(error);
    apiKeyInput.classList.add('error');
  }
}

// Update character count
function updateCharCount() {
  const count = inputText.value.length;
  charCount.textContent = count.toLocaleString();
}

// Clear input text
function clearInput() {
  inputText.value = '';
  updateCharCount();
  inputText.focus();
}

// Copy corrected text to clipboard
async function copyToClipboard() {
  if (!outputText.value || outputText.value === outputText.placeholder) {
    return;
  }
  
  try {
    await navigator.clipboard.writeText(outputText.value);
    // Visual feedback - briefly change button appearance
    const originalColor = copyBtn.style.color;
    copyBtn.style.color = '#000';
    setTimeout(() => {
      copyBtn.style.color = originalColor;
    }, 200);
  } catch (error) {
    console.error(error);
  }
}

// Main grammar correction function
async function correctGrammar() {
  const text = inputText.value.trim();

  // Validation
  if (!text) {
    inputText.classList.add('error');
    inputText.placeholder = 'Please enter some text to correct';
    setTimeout(() => {
      inputText.classList.remove('error');
      inputText.placeholder = 'Paste or type your text here...';
    }, 2000);
    return;
  }

  // Get API key
  const saved = await chrome.storage.local.get(['apiKey']);
  const apiKey = saved.apiKey;

  if (!apiKey) {
    apiSection.style.display = 'block';
    apiKeyInput.focus();
    return;
  }

  // Show loading state
  correctBtn.disabled = true;
  correctBtn.classList.add('loading');
  document.getElementById('btnText').textContent = 'Correcting...';
  outputText.value = '';

  try {
    // Call OpenAI API
    const correctedText = await callOpenAI(apiKey, text);
    
    // Display result
    outputText.value = correctedText;
    
    // Scroll to output
    outputText.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  } catch (error) {
    console.error('Error:', error);
    
    // Show error in output area
    if (error.message.includes('401')) {
      outputText.placeholder = 'Error: Invalid API key. Click settings to update.';
      apiSection.style.display = 'block';
    } else if (error.message.includes('429')) {
      outputText.placeholder = 'Error: Rate limit exceeded. Please wait and try again.';
    } else if (error.message.includes('quota')) {
      outputText.placeholder = 'Error: Quota exceeded. Please add credits to your OpenAI account.';
    } else if (error.message.includes('network') || error.message.includes('fetch')) {
      outputText.placeholder = 'Error: Network issue. Check your internet connection.';
    } else {
      outputText.placeholder = 'Error: Failed to correct grammar. Please try again.';
    }
    
  } finally {
    // Reset button state
    correctBtn.disabled = false;
    correctBtn.classList.remove('loading');
    document.getElementById('btnText').textContent = 'Correct Grammar';
  }
}

// Call OpenAI API for grammar correction
async function callOpenAI(apiKey, text) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: GRAMMAR_CORRECTION_PROMPT
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.3,
      max_tokens: 2000
    })
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error?.message || `HTTP ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  
  if (!data.choices || !data.choices[0] || !data.choices[0].message) {
    throw new Error('Invalid response from OpenAI');
  }

  return data.choices[0].message.content.trim();
}
