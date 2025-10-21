# Quick Start Guide 🚀

Get Grammar Corrector running in 3 minutes!

## What You Need

1. Google Chrome browser
2. OpenAI API key ([Get one free here](https://platform.openai.com/api-keys))

## Installation (5 Minutes)

### Step 1: Generate Icons (2 minutes)

1. **Open** `icons/generate_icons.html` in Chrome
   - Double-click the file, or
   - Drag and drop into Chrome

2. **Click** "Download All Icons" button

3. **Move** the 4 downloaded PNG files into the `icons/` folder:
   - `icon16.png`
   - `icon32.png`
   - `icon48.png`
   - `icon128.png`

### Step 2: Install Extension (1 minute)

1. **Open** Chrome and go to: `chrome://extensions/`

2. **Turn ON** "Developer mode" (toggle in top-right corner)

3. **Click** "Load unpacked" button

4. **Select** the `grammar-agent` folder

5. ✅ **Extension installed!** You'll see "Grammar Corrector" in your toolbar

### Step 3: Setup API Key (1 minute)

1. **Get your OpenAI API key:**
   - Go to: https://platform.openai.com/api-keys
   - Sign up or log in
   - Click "Create new secret key"
   - Copy the key (starts with "sk-")

2. **Save API key in extension:**
   - Click the Grammar Corrector icon in Chrome toolbar
   - Settings panel will appear (or click ⚙️ icon)
   - Paste your API key
   - Click "Save Key"
   - Settings panel will close automatically

### Step 4: Test It! (1 minute)

1. **Type text with errors and logic issues:**
   ```
   I went to store yesterday. Tomorrow I bought milk.
   It was expensive but cheap so I didn't buy it because I purchased it.
   ```

2. **Click** "Correct Grammar" button

3. **See the magic:**
   ```
   I went to the store yesterday and bought milk.
   It was expensive, so I decided not to purchase it.
   ```

4. **Click the copy icon** (📋) to copy the corrected text

🎉 **You're all set!**

## How to Use

### Every Time You Need Grammar Correction:

1. **Click** the Grammar Corrector icon
2. **Paste** your text (up to 5000 characters)
3. **Click** "Correct Grammar"
4. **Click copy icon** to use the corrected text

That's it! Simple, fast, and clean.

## Tips

💡 **Settings**: Click the ⚙️ icon anytime to access API key settings

💡 **Character Limit**: Shows "0/5000" below input - max 5000 characters

💡 **Clear Button**: Click trash icon in input area to clear text

💡 **Copy Button**: Click copy icon in output area to copy corrected text

💡 **No Tracking**: Extension doesn't monitor web pages - only corrects text you paste

💡 **Privacy**: Only your API key is stored locally. Text is never saved.

## Common Issues

### ❌ Settings panel appears when clicking "Correct Grammar"

**Fix**: No API key saved yet - enter your key and click "Save Key"

### ❌ Input shakes or shows error message

**Fix**: Empty input - type or paste text first, then click "Correct Grammar"

### ❌ "Quota exceeded"

**Fix**: Your OpenAI account needs credits. Add payment method at [OpenAI Billing](https://platform.openai.com/account/billing)

### ❌ Icons look like puzzle pieces

**Fix**: You skipped Step 1! Generate the PNG icons.

## How Much Does It Cost?

The extension is **FREE**, but OpenAI charges for API usage:

**GPT-4o Mini Pricing:**
- About **$0.0002-0.0005** per correction (500 words)
- **10x cheaper** than GPT-3.5-turbo
- With $5 credit: ~10,000 corrections
- OpenAI often gives **$5 free credit** for new accounts

[Check current pricing →](https://openai.com/pricing)

## Privacy & Security

✅ **No tracking** of your typing on websites  
✅ **No data collection** or storage  
✅ **Only your API key** is stored (locally in your browser)  
✅ **Text sent to OpenAI** only when you click "Correct Grammar"  
✅ **Open source** - inspect the code yourself

## Next Steps

- Read the full [README.md](README.md) for more details
- Customize the correction prompt in `popup.js`
- Try different AI models (GPT-4 for better quality)

## Need Help?

- Check the [README Troubleshooting section](README.md#troubleshooting)
- Open an issue on GitHub
- Email: support@grammagent.com

---

**Happy writing! ✍️**
