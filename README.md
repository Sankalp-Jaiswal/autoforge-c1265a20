# Premium Personal Blog

A modern, minimalist personal blog built with React, Vite, Tailwind CSS, and Express. Features a dark/light mode toggle, glassmorphism UI, smooth animations, and markdown rendering.

## Features
- 🎨 **Premium UI/UX**: Glassmorphism, gradients, and micro-animations.
- 🌓 **Dark Mode**: Fully supported dark/light mode with system preference detection.
- 📝 **Markdown Support**: Renders blog posts from markdown content.
- 📱 **Responsive**: Mobile-first design perfectly scaled for all devices.
- 🚀 **Performance**: Built with Vite for lightning-fast HMR and optimized builds.

## Project Structure
The project is divided into two parts:
1. `frontend_code`: The React + Vite application.
2. `backend_code`: A simple Express API serving mock data (simulating Vercel Serverless Functions).

*Note: The frontend includes a fallback mechanism. If the backend is not running, it will automatically use internal mock data, ensuring the UI is always fully functional and testable.*

## Setup Instructions

### 1. Backend Setup
Navigate to the directory containing the backend files (`package.json`, `server.js`, `data.js`).
```bash
# Install dependencies
npm install

# Start the server (runs on port 3001)
npm start
```

### 2. Frontend Setup
Navigate to the directory containing the frontend files.
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`. The Vite dev server proxies `/api` requests to the Express backend running on port 3001.

## Building for Production
```bash
npm run build
```
This uses exactly `vite build` as requested. The output will be in the `dist` directory. The included `vercel.json` ensures SPA routing works perfectly when deployed to Vercel.
