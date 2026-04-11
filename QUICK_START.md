# 🚀 Quick Start Guide

## 5-Minute Setup

### 1. Install Dependencies

```bash
# From root directory
npm run install-all
```

### 2. Start MongoDB

```bash
# Windows (if local)
mongod

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### 3. Start Development

```bash
# From root directory - runs both frontend & backend
npm run dev
```

### 4. Open in Browser

```
Frontend: http://localhost:3000
Backend API: http://localhost:5000
```

✅ Done! You should see the portfolio website running.

---

## 📁 Project Structure Overview

```
portfolio/
│
├── 📱 frontend/                    # React App
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/             # All UI components
│   │   ├── context/                # Theme context
│   │   ├── data/                   # Static data (projects, skills)
│   │   ├── App.jsx
│   │   └── index.css               # Global styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
│
├── 🔧 backend/                     # Node.js + Express
│   ├── models/                     # MongoDB schemas
│   ├── controllers/                # Route handlers
│   ├── routes/                     # API routes
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── 📖 Documentation Files
│   ├── README.md                   # Main documentation
│   ├── SETUP.md                    # Installation guide
│   ├── DESIGN_SYSTEM.md            # Design tokens & guidelines
│   ├── FEATURES.md                 # Creative elements showcase
│   └── QUICK_START.md              # This file
│
└── .gitignore
```

---

## 🎨 Customizing Your Portfolio

### 1. Update Your Information

Edit `frontend/src/data/projectsData.js`:

```javascript
// Change projects
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Your description",
    // ... add more fields
  },
];

// Change skills
export const skills = [
  {
    category: "Your Category",
    skills: ["Skill 1", "Skill 2"],
  },
];

// Change experience
export const experience = [
  {
    year: "2024",
    role: "Your Role",
    company: "Your Company",
  },
];
```

### 2. Change Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  neon: {
    blue: '#your-blue',
    purple: '#your-purple',
    cyan: '#your-cyan',
    pink: '#your-pink',
  }
}
```

### 3. Update Name & Logo

Edit `frontend/src/components/Navigation.jsx`:

```jsx
<h3 className="text-2xl font-bold">{"{YOUR_NAME"}</h3>
```

### 4. Add Your Images

Replace placeholder images in components:

- `About.jsx`: Profile picture
- `Projects.jsx`: Project thumbnails
- `Contact.jsx`: Social icons

### 5. Connect Your Email

Edit `frontend/src/components/Contact.jsx`:

Update the API endpoint to your backend:

```javascript
const response = await axios.post(
  "http://your-backend-url/api/contact",
  formData,
);
```

---

## 🌐 Deployment Steps

### Prepare for Production

1. **Build Frontend**

   ```bash
   cd frontend
   npm run build
   ```

2. **Set Environment Variables**
   - Backend: Update `.env` with production MongoDB
   - Frontend: Update API URL in .env

### Deploy Option 1: Vercel + Heroku

```bash
# Deploy backend to Heroku
cd backend
heroku create your-app-name
git push heroku main

# Deploy frontend to Vercel
cd frontend
vercel
```

### Deploy Option 2: Railway / Render

- Connect your GitHub repo
- Set environment variables
- Deploy automatically

### Deploy Option 3: Traditional Hosting

```bash
# Build both
npm run build

# Deploy frontend to static hosting (Netlify, GitHub Pages, etc.)
# Deploy backend to VPS (AWS, DigitalOcean, Linode, etc.)
```

---

## 🔧 Troubleshooting Quick Fix

| Issue                   | Solution                                                   |
| ----------------------- | ---------------------------------------------------------- |
| MongoDB not connecting  | `mongod` or check `.env` MONGODB_URI                       |
| Port 3000 in use        | Change port: `PORT=3001 npm start`                         |
| Port 5000 in use        | Change in backend/.env: `PORT=5001`                        |
| CORS error              | Update `backend/server.js` CORS origin                     |
| Styles not loading      | Clear cache: `npm run build`                               |
| Components not updating | Clear `node_modules`: `rm -rf node_modules && npm install` |

---

## 📚 Key Files to Know

| File                                | Purpose                |
| ----------------------------------- | ---------------------- |
| `frontend/src/components/*.jsx`     | UI components          |
| `frontend/src/data/projectsData.js` | Portfolio content      |
| `frontend/tailwind.config.js`       | Design system & colors |
| `backend/server.js`                 | API server setup       |
| `backend/models/*.js`               | Database schemas       |
| `backend/routes/*.js`               | API endpoints          |

---

## 🎯 What's Included

✅ 10 React components
✅ 50+ animations
✅ Dark/Light mode
✅ Contact form with backend API
✅ AI chat assistant
✅ Responsive design
✅ Case study modals
✅ Skill showcase
✅ Experience timeline
✅ Experience achievements section

---

## 🚀 Next Steps

1. **Customize Content**: Update your projects, skills, experience
2. **Add Images**: Replace placeholder images with your own
3. **Test**: Verify all animations and interactions work
4. **Connect Email**: Set up email notifications
5. **Deploy**: Push to production

---

## 💡 Pro Tips

- Use browser DevTools to inspect and test
- Test on mobile devices for responsiveness
- Use Framer Motion dev tools for animation debugging
- Keep MongoDB running while developing
- Commit changes regularly to Git

---

## 📞 Need Help?

- Check `SETUP.md` for detailed installation
- Review `DESIGN_SYSTEM.md` for design customization
- See `FEATURES.md` for animation documentation
- Check backend `README.md` for API details

---

**Happy building! 🎉**

Last Updated: April 2024
