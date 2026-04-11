# Deployment Guide - Vercel

## Prerequisites

- GitHub account
- Vercel account (free at vercel.com)
- Git installed locally

## Step 1: Initialize Git & Push to GitHub

### On Your Machine:

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit - portfolio project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 2: Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Sign up or log in with your GitHub account
3. Click "New Project"
4. Select your `portfolio` repository
5. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (or keep default)
   - **Build Command:** `cd frontend && npm install && npm run build`
   - **Output Directory:** `frontend/dist`
   - **Environment Variables:** Add the following:
     - `VITE_API_URL`: (leave as localhost for now, update later with backend URL)

6. Click "Deploy"

**Your frontend will be live at:** `https://YOUR-PROJECT.vercel.app`

## Step 3: Deploy Backend (Optional - for full functionality)

### Option A: Render.com (Recommended)

1. Go to https://render.com
2. Sign up with GitHub
3. Create a new "Web Service"
4. Connect to your GitHub repository
5. Configure:
   - **Name:** portfolio-backend
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment Variables:**
     - `NODE_ENV`: production
     - `MONGODB_URI`: (if using MongoDB)
     - `PORT`: 5001

6. Deploy

**Your backend will be live at:** `https://portfolio-backend.onrender.com`

### Option B: Railway.app

1. Go to https://railway.app
2. Connect GitHub
3. Deploy repository
4. Set environment variables
5. Get your backend URL

## Step 4: Update Frontend with Production Backend URL

1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Update `VITE_API_URL` to your backend URL (e.g., `https://portfolio-backend.onrender.com`)
5. Redeploy

## Step 5: Test

1. Visit your Vercel frontend URL
2. Test all features (contact form, API calls, etc.)
3. Make sure it connects to your backend

## Future Deployments

Every time you push to GitHub:

```bash
git add .
git commit -m "Your message"
git push
```

Vercel will automatically redeploy!

## If You Need to Make Changes

1. Edit files locally
2. Run `npm run dev` to test
3. Commit and push:

```bash
git add .
git commit -m "Description of changes"
git push
```

That's it! Your project will auto-deploy.
