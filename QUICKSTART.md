# Quick Start Guide 🚀

Get Grammar Agent running in 5 minutes!

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

5. ✅ **Extension installed!** You'll see the icon in your toolbar

### Step 3: Setup API Key (1 minute)

1. **Get your OpenAI API key:**
   - Go to: https://platform.openai.com/api-keys
   - Sign up or log in
   - Click "Create new secret key"
   - Copy the key (starts with "sk-")

2. **Save API key in extension:**
   - Click the Grammar Agent icon in Chrome toolbar
   - Paste your API key in the "OpenAI API Key" field
   - Click "Save"
   - You'll see "API key saved successfully! 🎉"

### Step 4: Test It! (1 minute)

1. **Type some text with errors:**
   ```
   This are a test. I has many error in grammer.
   ```

2. **Click** "Correct Grammar" button

3. **See the magic:**
   ```
   This is a test. I have many errors in grammar.
   ```

4. **Click** "Copy to Clipboard" to use the corrected text

🎉 **You're all set!**

## How to Use

### Every Time You Need Grammar Correction:

1. **Click** the Grammar Agent icon
2. **Paste** your text
3. **Click** "Correct Grammar"
4. **Copy** the result

That's it! Simple and fast.

## Tips

💡 **Character Counter**: Watch the character count to track your text length

💡 **Clear Button**: Quickly clear both input and output with one click

💡 **No Tracking**: This extension doesn't monitor your typing on websites - it only corrects what you explicitly paste into it

💡 **Privacy**: Only your API key is stored. Your text is never saved.

## Common Issues

### ❌ "Please save your OpenAI API key first"

**Fix**: You forgot Step 3! Enter your API key and click Save.

### ❌ "Invalid API key"

**Fix**: Make sure you copied the complete key (starts with `sk-`)

### ❌ "Quota exceeded"

**Fix**: Your OpenAI account needs credits. Add payment method at [OpenAI Billing](https://platform.openai.com/account/billing)

### ❌ Icons look like puzzle pieces

**Fix**: You skipped Step 1! Generate the PNG icons.

## How Much Does It Cost?

The extension is **FREE**, but OpenAI charges for API usage:

- About **$0.001-0.002** per correction
- A 500-word text costs less than 1 cent
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
