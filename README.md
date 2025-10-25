# Grammar Corrector ✍️

A minimalist Chrome extension for AI-powered grammar and logic correction using OpenAI GPT-4o Mini. Clean, simple, and privacy-focused.

## Features

✅ **Simple & Clean** - Minimalist black & white design, no distractions  
✅ **GPT-4o Mini Powered** - Smart grammar, logic, and context correction  
✅ **Logic & Context** - Fixes contradictions, unclear reasoning, and flow issues  
✅ **Privacy First** - No tracking, no content scripts, only your API key stored  
✅ **Inline Feedback** - No annoying popups, subtle error messages  
✅ **5000 Character Limit** - Perfect for emails, posts, and documents  
✅ **One-Click Copy** - Quick copy button for corrected text

## Installation

### Prerequisites

- Google Chrome or Chromium-based browser
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation Steps

1. **Load Extension**:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select the `grammar-agent` folder

2. **Setup API Key** (First time):
   - Click the Grammar Corrector icon in your toolbar
   - The settings panel will auto-appear if no key is saved
   - Enter your OpenAI API key
   - Click "Save Key"

## Usage

### Basic Workflow

1. **Click the extension icon** to open the popup
2. **Paste or type your text** in the input area
3. **Click "Correct Grammar"** button
4. **View corrected text** in the output area below
5. **Click the copy icon** to copy to clipboard

### Settings

- Click the ⚙️ icon in the header to show/hide API key settings
- Update or change your API key anytime

### Features

**Character Counter**: Shows "0/5000" below input - tracks your text length

**Clear Button**: Trash icon in the input area clears text instantly

**Copy Button**: Copy icon in output area copies corrected text to clipboard

**Smart Errors**: Error messages appear inline where relevant, no popups

## What It Corrects

The extension uses an advanced prompt that fixes:

1. **Grammar & Mechanics** - Spelling, punctuation, syntax errors
2. **Logical Flow** - Contradictions, unclear reasoning, missing steps
3. **Sentence Structure** - Readability and coherence improvements
4. **Context & Clarity** - Natural idea flow that makes sense
5. **Consistency** - Tense, perspective, and style throughout
6. **Word Choice** - Awkward or incorrect word usage
7. **Tone Preservation** - Keeps your original meaning and voice

### Example

**Input:**
```
I went to the store yesterday. Tomorrow I bought milk. 
The milk was expensive but cheap. I didn't buy it 
because I purchased it.
```

**Output:**
```
I went to the store yesterday and bought milk. 
The milk was expensive, so I decided not to purchase it.
```

The AI fixes tense issues, contradictions, and logical inconsistencies while preserving your intent.

## Technical Details

### Architecture

- **Manifest Version**: 3 (latest Chrome standard)
- **API**: OpenAI GPT-4o-mini
- **Popup-Only**: No content scripts or background workers
- **Storage**: Only API key stored locally
- **Permissions**: Storage only (no tab access, no tracking)

### Files Structure

```
grammar-agent/
├── manifest.json          # Extension configuration
├── popup.html            # Popup interface (550px width)
├── popup.css             # Minimalist black & white styling
├── popup.js              # OpenAI API integration
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   ├── icon128.png
│   └── icon.svg
├── README.md             # This file
├── QUICKSTART.md         # Quick setup guide
├── LICENSE               # MIT License
└── .gitignore           # Git ignore rules
```

### Model Information

**GPT-4o Mini**
- Released 2024 by OpenAI
- 10x cheaper than GPT-3.5-turbo
- Better at following complex instructions
- Excellent for grammar, logic, and context understanding
- Fast response times (~2-3 seconds)

## Privacy & Security

🔒 **Complete Privacy**

- **No Content Scripts**: Doesn't monitor or interact with web pages
- **No Background Workers**: Only runs when popup is open
- **No Data Collection**: Zero tracking or analytics
- **No External Storage**: API key stored only in Chrome's local storage
- **API Only**: Text is sent only to OpenAI when you click "Correct Grammar"

**What's Stored:**
- Your OpenAI API key (encrypted by Chrome in local storage)

**What's Sent:**
- Only the text you explicitly paste/type and submit
- Your API key for authentication
- Grammar correction prompt

**Nothing Else**: No browsing history, no typing patterns, no user data

## API Costs

### GPT-4o Mini Pricing

- **Input**: $0.00015 per 1K tokens
- **Output**: $0.0006 per 1K tokens

### Real-World Costs

| Text Length | Approximate Cost |
|-------------|------------------|
| 100 words | ~$0.0002 |
| 500 words | ~$0.0005 |
| 1000 words | ~$0.001 |
| 5000 words | ~$0.005 |

**Example**: With $5 of credit, you can correct approximately **10,000 texts** of 500 words each.

Check [OpenAI Pricing](https://openai.com/pricing) for current rates.

## Design Philosophy

This extension follows a minimalist design philosophy:

- **Black & White Only**: No colors, no distractions
- **No Popups**: Feedback is inline and subtle
- **Compact**: 550px width, doesn't take over your screen
- **Fast**: Minimal UI, quick interactions
- **Professional**: Clean typography and spacing

## Troubleshooting

### Extension Not Responding

1. Go to `chrome://extensions/`
2. Find "Grammar Corrector"
3. Click the reload icon (🔄)
4. Try again

### API Key Issues

**Error: "Invalid API key"**
- Make sure your key starts with `sk-`
- Copy the complete key without extra spaces
- Check key is active at [OpenAI Platform](https://platform.openai.com/api-keys)

**Settings panel auto-appears**
- This means no API key is saved
- Enter your key and click "Save Key"

### API Errors

**Rate Limit**: Wait 60 seconds and try again

**Quota Exceeded**: Add credits at [OpenAI Billing](https://platform.openai.com/account/billing)

**Network Error**: Check your internet connection

**Invalid API Key**: The settings panel will open - update your key

### No Output

1. Check that you entered text in the input area
2. Make sure you have an API key saved
3. Look for error messages in the output placeholder
4. Check browser console for errors (F12)

## Development

### Customize the Prompt

Edit the `GRAMMAR_CORRECTION_PROMPT` in `popup.js` (lines 4-16):

```javascript
const GRAMMAR_CORRECTION_PROMPT = `Your custom prompt here...`;
```

### Change AI Model

In `popup.js`, find the `callOpenAI` function and update the model:

```javascript
model: 'gpt-4o-mini',     // Current (best value)
model: 'gpt-4o',          // More powerful (~3x cost)
model: 'gpt-4-turbo',     // Most powerful (~10x cost)
```

### Adjust Temperature

Lower = more consistent, Higher = more creative:

```javascript
temperature: 0.3,  // 0-1 scale (current: 0.3)
```

### Modify Token Limit

```javascript
max_tokens: 2000,  // Increase for longer texts
```

## Limitations

- Requires internet connection for API calls
- Requires OpenAI API key with available credits
- 5000 character limit per correction
- Text is processed by OpenAI (see their [Privacy Policy](https://openai.com/policies/privacy-policy))
- Response time depends on OpenAI API (~2-5 seconds)

## Future Enhancements

- [ ] Multiple AI provider support (Anthropic Claude, Google Gemini)
- [ ] Custom temperature and creativity settings
- [ ] Different correction modes (strict, balanced, creative)
- [ ] Language selection for non-English text
- [ ] Dark mode option
- [ ] Keyboard shortcuts
- [ ] Correction history (opt-in)
- [ ] Export/import settings
- [ ] Batch processing for multiple texts

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/grammar-agent.git
cd grammar-agent

# Make your changes
# No build step needed - vanilla JavaScript!

# Load in Chrome
# 1. Go to chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked"
# 4. Select this folder
```

## License

MIT License - see LICENSE file for details.

## Support

Need help or found a bug?

- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/grammar-agent/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/grammar-agent/discussions)
- 📧 **Email**: yagizhanyakali@gmail.com

## Security

To report security vulnerabilities, please email yagizhanyakali@gmail.com

**Keep your API key secure:**
- Never share your API key publicly
- Never commit it to version control
- Regenerate if compromised
- Monitor usage at [OpenAI Dashboard](https://platform.openai.com/usage)

## Acknowledgments

- Grammar and logic correction powered by [OpenAI GPT-4o Mini](https://openai.com/)
- Inspired by minimalist design principles

## Changelog

### Version 1.0.0 (Current)
- ✨ GPT-4o Mini integration (10x cheaper, smarter)
- ✨ Logic and context correction
- ✨ Minimalist black & white UI
- ✨ Inline error feedback (no popups)
- ✨ 5000 character limit
- ✨ Settings panel with gear icon
- ✨ Privacy-focused (no content scripts)
- ✨ Compact 550px width

---

**Made for better writing, with respect for your privacy**

⭐ Star this repo if you find it useful!
