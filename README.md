# Grammar Agent ✍️

A simple and privacy-focused Chrome extension for AI-powered grammar correction using OpenAI. Paste your text, get it corrected, and copy it back - no tracking, no monitoring of your inputs.

## Features

✅ **Simple Interface** - Just paste your text and click correct  
✅ **OpenAI-Powered** - Uses GPT-3.5-turbo for intelligent grammar correction  
✅ **Privacy-Focused** - No tracking of your text inputs on web pages  
✅ **No Data Storage** - Only your API key is stored locally  
✅ **Clean Output** - Get only the corrected text, no explanations  
✅ **Copy to Clipboard** - Quick copy button for easy use  
✅ **Character Counter** - Track your text length  
✅ **Beautiful UI** - Modern, gradient design

## Installation

### Prerequisites

- Google Chrome or Chromium-based browser
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation Steps

1. **Generate Icons** (required):
   ```bash
   # Open icons/generate_icons.html in your browser
   # Click "Download All Icons" button
   # Move the 4 PNG files to the icons/ folder
   ```

2. **Load Extension**:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select the `grammar-agent` folder

3. **Setup API Key**:
   - Click the Grammar Agent icon in your toolbar
   - Enter your OpenAI API key
   - Click "Save"

## Usage

1. **Click the extension icon** to open the popup
2. **Enter your OpenAI API key** (first time only) and click "Save"
3. **Paste or type your text** in the input area
4. **Click "Correct Grammar"** button
5. **View the corrected text** in the output area
6. **Click "Copy to Clipboard"** to copy the result

### Example

**Input:**
```
This are a example text with some grammar error. I has been working on this project for long time and want to make sure the grammer is correct.
```

**Output:**
```
This is an example text with some grammar errors. I have been working on this project for a long time and want to make sure the grammar is correct.
```

## How It Works

1. You paste text into the extension popup
2. The extension sends your text + grammar correction prompt to OpenAI API
3. OpenAI returns the corrected text
4. You see the result and can copy it

**Important:** The text is sent to OpenAI's API for processing. Your text is NOT stored by this extension, but OpenAI processes it according to their [privacy policy](https://openai.com/policies/privacy-policy).

## Grammar Correction Prompt

The extension uses this prompt template:

```
You are a professional grammar correction assistant. Your task is to:

1. Correct all grammar, spelling, and punctuation errors
2. Improve sentence structure and clarity
3. Maintain the original meaning and tone
4. Keep the same language as the input text

Please correct the following text and return ONLY the corrected version without any explanations or additional comments:
```

You can modify this prompt in `popup.js` if you want different behavior.

## Files Structure

```
grammar-agent/
├── manifest.json          # Extension configuration (Manifest V3)
├── popup.html            # Popup interface HTML
├── popup.css             # Popup styles
├── popup.js              # OpenAI API integration
├── icons/                # Extension icons
│   ├── icon.svg
│   └── generate_icons.html
├── README.md             # This file
└── LICENSE               # MIT License
```

## Privacy & Security

🔒 **Your Privacy is Important**

- **No Tracking**: This extension does NOT monitor or track text inputs on web pages
- **No Content Scripts**: No code runs on websites you visit
- **No Data Collection**: We don't collect or store any of your text
- **API Key Stored Locally**: Your OpenAI API key is stored only in your browser's local storage
- **No Background Processes**: Only runs when you open the popup
- **Open Source**: Full source code available for inspection

**What gets sent to OpenAI:**
- Only the text you explicitly paste/type in the extension popup
- The grammar correction prompt
- Your API key (for authentication)

**What's stored:**
- Only your OpenAI API key (in Chrome's local storage)

## API Costs

This extension uses OpenAI's GPT-3.5-turbo model. Costs are:
- ~$0.0015 per 1000 input tokens
- ~$0.002 per 1000 output tokens

Example: A 500-word text costs approximately $0.001-0.002 per correction.

Check [OpenAI Pricing](https://openai.com/pricing) for current rates.

## Troubleshooting

### "Please save your OpenAI API key first"

**Solution**: Enter your API key in the top field and click "Save". Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys).

### "Invalid API key"

**Solution**: Make sure your API key:
- Starts with "sk-"
- Is copied correctly without extra spaces
- Is active and has available credits

### "Rate limit exceeded"

**Solution**: You've sent too many requests. Wait a minute and try again. OpenAI has rate limits based on your account tier.

### "Quota exceeded"

**Solution**: Your OpenAI account has run out of credits. Add credits to your account at [OpenAI Billing](https://platform.openai.com/account/billing).

### Icons not showing

**Solution**: 
1. Open `icons/generate_icons.html` in your browser
2. Click "Download All Icons"
3. Move all 4 PNG files to the `icons/` folder
4. Reload the extension

## Development

### Customize the Prompt

Edit the `GRAMMAR_CORRECTION_PROMPT` constant in `popup.js`:

```javascript
const GRAMMAR_CORRECTION_PROMPT = `Your custom prompt here...`;
```

### Change the AI Model

In `popup.js`, find the `callOpenAI` function and change the model:

```javascript
model: 'gpt-4', // Change from 'gpt-3.5-turbo'
```

Available models:
- `gpt-3.5-turbo` - Fastest, cheapest (recommended)
- `gpt-4` - More capable, slower, more expensive
- `gpt-4-turbo` - Balance of speed and capability

### Adjust AI Behavior

Modify the `temperature` parameter in `popup.js`:

```javascript
temperature: 0.3, // 0 = deterministic, 1 = creative
```

Lower temperature (0-0.3) = More consistent corrections  
Higher temperature (0.7-1.0) = More creative rewrites

## Limitations

- Requires internet connection
- Requires OpenAI API key with credits
- Maximum ~2000 tokens per request (adjust `max_tokens` in code if needed)
- Text is sent to OpenAI for processing
- Response time depends on OpenAI API speed (~2-5 seconds)

## Future Enhancements

- [ ] Support for multiple AI providers (Anthropic, Google, etc.)
- [ ] Custom prompt templates
- [ ] History of corrections (opt-in)
- [ ] Batch correction for multiple texts
- [ ] Language detection and selection
- [ ] Style presets (formal, casual, academic)
- [ ] Diff view showing changes
- [ ] Export corrected text to file

## Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/grammar-agent/issues)
- 💬 **Questions**: [GitHub Discussions](https://github.com/yourusername/grammar-agent/discussions)
- 📧 **Email**: support@grammagent.com

## Acknowledgments

- Powered by [OpenAI](https://openai.com/)
- Built with vanilla JavaScript
- Icons generated with HTML Canvas

## Security Note

Keep your API key secure:
- Never share your API key
- Never commit it to version control
- Regenerate if compromised at [OpenAI Platform](https://platform.openai.com/api-keys)

---

**Made with ❤️ for better writing**

⭐ Star this repo if you find it useful!
