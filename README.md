# To-Do List Web Application

## Overview
This is a modern, responsive to-do list web application that allows you to organize your tasks in different folders, toggle between dark and light themes, and filter tasks by status.

## Features
- Create and manage to-do lists
- Organize tasks in different folders (All, Personal, Work, Ideas)
- Filter tasks by status (All, Active, Completed)
- Search functionality
- Dark/Light theme toggle
- List and Grid view options
- Local storage for data persistence

## How to Use Locally
1. Clone or download this repository to your computer
2. Open the folder containing the files
3. Start a local server (several options):
   - Using Python: `python -m http.server 8000`
   - Using Node.js: Install http-server with `npm install -g http-server` and run `http-server`
4. Open your browser and navigate to `http://localhost:8000`

## How to Deploy Online

### Option 1: GitHub Pages (Free)
1. Create a GitHub account if you don't have one at [github.com](https://github.com)
2. Create a new repository
3. Upload your files to the repository
4. Go to repository Settings > Pages
5. Set the source to your main branch and save
6. Your site will be published at `https://yourusername.github.io/repositoryname`

### Option 2: Netlify (Free)
1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Click "New site from Git" or drag and drop your project folder to the Netlify dashboard
3. Follow the setup instructions
4. Your site will be published with a Netlify subdomain (e.g., `https://your-site-name.netlify.app`)

### Option 3: Vercel (Free)
1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Navigate to your project directory and run `vercel`
4. Follow the prompts to deploy
5. Your site will be available at a Vercel subdomain

## Daily Usage Tips
1. **Bookmark the URL**: After deploying, bookmark the URL in your browser for quick access
2. **Create a Home Screen Shortcut**: 
   - On mobile devices, you can add the website to your home screen
   - On iOS: Open in Safari > Share button > Add to Home Screen
   - On Android: Open in Chrome > Menu > Add to Home Screen
3. **Set as Browser Homepage**: Configure your browser to open the to-do app when you start it

## Data Storage
This application uses your browser's local storage to save your to-do lists. This means:
- Your data persists between sessions on the same device and browser
- Your data is not synchronized between different devices
- Clearing browser data will erase your saved to-do lists

## Future Enhancements
To make this application more powerful for daily use, consider these future enhancements:
- User accounts with cloud storage for cross-device synchronization
- Notifications and reminders
- Calendar integration
- Sharing capabilities

## Support
If you encounter any issues or have questions, please reach out for support.