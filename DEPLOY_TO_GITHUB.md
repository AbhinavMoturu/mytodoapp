# Deploying Your To-Do List App to GitHub Pages

## Step-by-Step Guide

### 1. Create a GitHub Account
If you don't already have one, sign up at [github.com](https://github.com).

### 2. Install Git
Download and install Git from [git-scm.com](https://git-scm.com/downloads) if you don't have it installed.

### 3. Create a New Repository
1. Log in to GitHub
2. Click the '+' icon in the top right corner and select 'New repository'
3. Name your repository (e.g., "todo-app")
4. Make it public
5. Click 'Create repository'

### 4. Initialize Git in Your Project
Open Command Prompt or PowerShell in your project folder (`C:\Users\motur\Desktop\neeeeeewwwwww`) and run:

```
git init
git add .
git commit -m "Initial commit"
```

### 5. Connect to GitHub Repository
Replace `YOUR_USERNAME` with your GitHub username and `REPO_NAME` with your repository name:

```
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### 6. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click 'Settings'
3. Scroll down to 'GitHub Pages' section
4. Under 'Source', select 'main' branch
5. Click 'Save'

### 7. Access Your Online To-Do List
After a few minutes, your to-do list will be available at:
`https://YOUR_USERNAME.github.io/REPO_NAME`

### 8. Bookmark for Daily Use
1. Open the URL in your browser
2. Bookmark it or add to favorites
3. For mobile devices, add to home screen:
   - iOS: Share button → Add to Home Screen
   - Android: Menu → Add to Home Screen

## Important Notes
- Your to-do lists are stored in your browser's local storage
- Each device will have its own separate list of tasks
- Clearing browser data will erase your saved tasks

## Updating Your App
When you make changes to your app locally, push them to GitHub:

```
git add .
git commit -m "Description of changes"
git push
```

Your GitHub Pages site will automatically update within a few minutes.