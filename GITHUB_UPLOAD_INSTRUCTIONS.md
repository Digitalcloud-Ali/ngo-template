# GitHub Upload Instructions

## Option 1: Automated Upload (Recommended)

Simply run the batch file:
```bash
upload-to-github.bat
```

## Option 2: Manual Upload

### Step 1: Create Repository on GitHub

1. Go to https://github.com/rayice
2. Click "New repository" or navigate to: https://github.com/organizations/rayice/repositories/new
3. Repository details:
   - **Name**: `digitalcloud-ali-ngo-template`
   - **Description**: Premium NGO website template with 3D effects - Håp Norge
   - **Visibility**: Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### Step 2: Upload Files via Command Line

Open PowerShell in the `ngo` directory and run:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Håp Norge NGO Template - Premium single-page website with 3D effects"

# Rename branch to main
git branch -M main

# Add remote repository (replace with your actual URL)
git remote add origin https://github.com/rayice/digitalcloud-ali-ngo-template.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify Upload

Visit: https://github.com/rayice/digitalcloud-ali-ngo-template

You should see all your files uploaded!

## Option 3: Upload via GitHub Desktop

1. Download and install GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. File → Add Local Repository → Choose the `ngo` folder
4. Click "Publish repository"
5. Select organization: `rayice`
6. Repository name: `digitalcloud-ali-ngo-template`
7. Click "Publish Repository"

## Option 4: Upload via VS Code

1. Open the `ngo` folder in VS Code
2. Click the Source Control icon (left sidebar)
3. Click "Initialize Repository"
4. Stage all changes (click + next to "Changes")
5. Enter commit message: "Initial commit: Håp Norge NGO Template"
6. Click ✓ Commit
7. Click "..." → Push → Add Remote
8. Enter: `https://github.com/rayice/digitalcloud-ali-ngo-template.git`
9. Push to GitHub

## Troubleshooting

### Error: "Repository not found"
- Make sure you've created the repository on GitHub first
- Verify the repository URL is correct
- Check you have access to the `rayice` organization

### Error: "Permission denied"
- You may need to authenticate with GitHub
- Run: `git config --global user.name "Your Name"`
- Run: `git config --global user.email "your.email@example.com"`
- Set up GitHub credentials: https://docs.github.com/en/authentication

### Error: "Updates were rejected"
- The repository already has content
- Either clone the existing repo or force push (not recommended):
  ```bash
  git push -u origin main --force
  ```

## Files Included in Upload

✅ index.html - Main single-page website
✅ styles.css - Base styles
✅ slider-3d-enhanced.css - 3D slider effects
✅ site-3d-effects.css - Site-wide 3D effects
✅ color-fixes.css - Color system
✅ script.js - Main JavaScript
✅ slider-3d.js - Slider functionality
✅ site-3d-effects.js - 3D effects
✅ particles.js - Particle system
✅ README.md - Documentation
✅ .gitignore - Git ignore rules

## Next Steps After Upload

1. **Enable GitHub Pages** (if you want a live demo):
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main
   - Click Save
   - Your site will be live at: `https://rayice.github.io/digitalcloud-ali-ngo-template/`

2. **Add Topics/Tags**:
   - ngo-template
   - website-template
   - 3d-effects
   - single-page
   - responsive-design
   - norwegian

3. **Update Repository Description**:
   "Premium NGO website template with 3D effects, animations, and modern design. Single-page responsive site for humanitarian organizations."

## Support

For issues or questions:
- Email: support@digitalcloud.no
- Create an issue: https://github.com/rayice/digitalcloud-ali-ngo-template/issues

---

**Good luck with your upload! 🚀**
