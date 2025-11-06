# Installing Node.js on Windows

## Option 1: Download and Install Node.js (Recommended)

### Step 1: Download Node.js
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version for Windows
   - This will download a `.msi` installer file (e.g., `node-v20.x.x-x64.msi`)

### Step 2: Install Node.js
1. Double-click the downloaded `.msi` file
2. Follow the installation wizard:
   - Click "Next" through the setup
   - Accept the license agreement
   - Keep the default installation path
   - **Important**: Make sure "Add to PATH" is checked (it should be by default)
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

### Step 3: Verify Installation
1. **Close and reopen** your PowerShell/Command Prompt window
2. Run these commands to verify:
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers for both commands.

### Step 4: Install Project Dependencies
Once Node.js is installed, navigate to your project folder and run:
```powershell
npm install
```

### Step 5: Start the Application
```powershell
npm start
```

---

## Option 2: Install via Chocolatey (If you have Chocolatey)

If you have Chocolatey package manager installed, you can install Node.js using:

```powershell
choco install nodejs
```

Then restart your terminal and verify:
```powershell
node --version
npm --version
```

---

## Option 3: Install via Winget (Windows 10/11)

If you have Windows 10/11 with winget, you can use:

```powershell
winget install OpenJS.NodeJS.LTS
```

Then restart your terminal and verify:
```powershell
node --version
npm --version
```

---

## Troubleshooting

### If npm is still not recognized after installation:

1. **Restart your terminal/PowerShell** - This is important as PATH changes require a restart
2. **Restart your computer** - Sometimes needed for PATH changes to take effect
3. **Check PATH manually**:
   - Press `Win + R`, type `sysdm.cpl`, press Enter
   - Go to "Advanced" tab → "Environment Variables"
   - Under "System variables", find "Path" and click "Edit"
   - Make sure `C:\Program Files\nodejs\` is in the list
   - If not, add it and restart your terminal

### Verify Node.js Installation Path:
- Default installation path: `C:\Program Files\nodejs\`
- Check if this folder exists and contains `node.exe` and `npm.cmd`

---

## After Installation

Once Node.js is installed:

1. **Navigate to your project folder**:
   ```powershell
   cd C:\Users\sures\OneDrive\Documents\Desktop\IT
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Start the development server**:
   ```powershell
   npm start
   ```

4. **Open your browser** to `http://localhost:3000`

---

## Quick Check

After installation, run these commands to verify everything is working:

```powershell
node --version    # Should show something like v20.x.x
npm --version     # Should show something like 10.x.x
```

If both commands show version numbers, you're ready to go! 🎉
