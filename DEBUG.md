# Debug Instructions

## The extension is not responding to clicks

### Step 1: Reload the Extension

1. Go to `chrome://extensions/`
2. Find "Grammar Agent"
3. Click the **reload icon** (circular arrow) on the extension card
4. Try opening the extension again

### Step 2: Check Console for Errors

1. Right-click on the Grammar Agent icon in your toolbar
2. Select "Inspect popup"
3. Look at the Console tab
4. You should see these messages:
   ```
   Grammar Agent: DOM loaded
   Elements found: {apiKeyInput: true, saveApiKeyBtn: true, ...}
   Save button listener added
   Correct button listener added
   Clear button listener added
   Input listener added
   Grammar Agent: Initialization complete
   ```

5. Try clicking buttons and see if you get messages like:
   ```
   Save API key clicked
   Correct grammar clicked
   ```

### Step 3: If No Console Messages Appear

This means the JavaScript isn't loading. Try:
1. Make sure the `popup.js` file exists
2. Check the manifest.json has the correct popup.html reference
3. Reload the extension again

### Step 4: If Console Shows Errors

Share the error message and we'll fix it!

### Step 5: Quick Test

Try this quick HTML test - create a file called `test.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Test</title>
  <style>
    button { padding: 20px; font-size: 16px; }
  </style>
</head>
<body>
  <button onclick="alert('It works!')">Click Me</button>
  <script>
    console.log('Test loaded');
  </script>
</body>
</html>
```

If this button doesn't work in Chrome, there might be a browser issue.

