# Setup & Installation Guide

## 📋 Prerequisites

- **Node.js**: v16 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **MongoDB**: Either local installation or MongoDB Atlas account ([Download](https://www.mongodb.com/try/download/community))
- **Git**: For version control ([Download](https://git-scm.com/))

## 🚀 Quick Start (Both Frontend & Backend)

### Option 1: Install All Dependencies at Once

```bash
# Navigate to root directory
cd portfolio

# Install dependencies for root, frontend, and backend
npm run install-all
```

### Option 2: Manual Installation

#### Install Backend Dependencies
```bash
cd backend
npm install
```

#### Install Frontend Dependencies
```bash
cd frontend
npm install
```

## ⚙️ Configuration

### 1. MongoDB Setup

#### Local MongoDB
```bash
# Windows (if MongoDB installed locally)
mongod

# macOS (with Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

#### MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create an account and new project
3. Create a cluster
4. Get connection string
5. Update `backend/.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

### 2. Backend Environment Setup

Create `backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

### 3. Frontend Environment Setup (Optional)

Create `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000
```

## 🎯 Running the Project

### Option 1: Run Both Frontend & Backend Concurrently (from root)

```bash
npm run dev
```

This starts:
- Backend on `http://localhost:5000`
- Frontend on `http://localhost:3000`

### Option 2: Run Separately

#### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

#### Terminal 2 - Frontend
```bash
cd frontend
npm start
```

## ✅ Verification

1. Open `http://localhost:3000` in your browser
2. You should see the portfolio homepage
3. Test the contact form - it should connect to the backend
4. Check browser console for any errors

## 📝 Customization

### Update Portfolio Content

Edit `frontend/src/data/projectsData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Description",
    // ... more fields
  }
];
```

### Update Contact Email

Update the API endpoint in `frontend/src/components/Contact.jsx`:

```javascript
const response = await axios.post('http://your-backend-url/api/contact', formData);
```

### Change Color Scheme

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  neon: {
    blue: '#your-color',
    purple: '#your-color',
    // ...
  }
}
```

### Update Navigation Links

Edit `frontend/src/components/Navigation.jsx` to customize navigation items

## 🌐 Deployment

### Deploy Backend to Heroku

```bash
cd backend

# Install Heroku CLI
# Login to Heroku
heroku login

# Create new app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri

# Deploy
git push heroku main
```

### Deploy Frontend to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

cd frontend

# Deploy
vercel

# Set API URL environment variable in Vercel dashboard
```

### Deploy Frontend to Netlify

```bash
cd frontend

# Build
npm run build

# Drag and drop 'build' folder to Netlify
# Or connect your GitHub repository
```

## 🐛 Troubleshooting

### "Cannot find module" errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### MongoDB connection refused

```bash
# Ensure MongoDB is running
# Windows: Check Services or run 'mongod' in terminal
# macOS: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

### Port already in use

```bash
# Change PORT in backend/.env
# Or kill the process using the port

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

### CORS errors

```
Access to XMLHttpRequest has been blocked by CORS policy
```

Update `backend/server.js`:
```javascript
app.use(cors({
  origin: 'http://localhost:3000'
}));
```

### Styling not loading

```bash
# Rebuild Tailwind CSS
cd frontend
npm run build
```

## 📚 Useful Commands

```bash
# Backend
cd backend
npm start          # Production
npm run dev        # Development with auto-reload

# Frontend
cd frontend
npm start          # Development server
npm run build      # Build for production
npm test           # Run tests

# Root
npm run install-all    # Install all dependencies
npm run dev           # Run both frontend and backend
```

## 📖 API Testing

Use tools like Postman or cURL to test API endpoints:

### Test Contact Submission
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message content"
  }'
```

### Get All Projects
```bash
curl http://localhost:5000/api/projects
```

## 🎨 Design System Reference

See `DESIGN_SYSTEM.md` for detailed design documentation including:
- Color palette
- Typography
- Component specifications
- Animation guidelines
- Responsive breakpoints

## 🤝 Support

If you encounter issues:

1. Check error messages in console
2. Review troubleshooting section above
3. Ensure all prerequisites are installed
4. Check network connectivity
5. Verify environment variables

## 📄 Additional Resources

- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Express.js: https://expressjs.com/
- MongoDB: https://docs.mongodb.com/

---

**Happy coding! 🚀**
