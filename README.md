# Futuristic Portfolio Website - MERN Stack

A stunning, highly creative personal portfolio website UI designed for UI/UX designers. Built with React, Node.js, Express, and MongoDB (MERN stack).

## 🎨 Design Features

- **Dark, Modern Theme**: Deep navy background (#0f172a) with neon accents
- **Neon Color Palette**: Glowing blue, purple, cyan, and pink accents
- **Glassmorphism**: Semi-transparent glass effects with backdrop blur
- **Smooth Micro-interactions**: Hover effects, animations, and transitions
- **Responsive Design**: Mobile-first, fully responsive layout
- **Dark/Light Mode Toggle**: Theme switching capability
- **AI Chat Assistant**: Floating chatbot with quick replies

## 🚀 Key Sections

1. **Hero Section**: Full-screen landing with animated background and CTA
2. **About**: Personal story with timeline and achievements
3. **Projects**: Interactive project showcase with hover animations
4. **Case Studies**: Detailed project case study modal with problem, research, and metrics
5. **Skills**: Dynamic skill display with proficiency levels
6. **Experience**: Timeline-based career progression
7. **Contact**: Email form with validation and status messages
8. **Footer**: Minimal footer with links and newsletter signup
9. **AI Chat**: Floating assistant for user engagement

## 🛠️ Tech Stack

### Frontend
- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **Axios**: HTTP client

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **CORS**: Cross-origin resource sharing

## 📋 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── CaseStudy.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AIChat.jsx
│   │   │   └── index.js
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── data/
│   │   │   └── projectsData.js
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   ├── index.css
│   │   └── pages/
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/
│   ├── models/
│   │   ├── Contact.js
│   │   └── Project.js
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── projectController.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── projects.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

#### Backend Setup
```bash
cd backend
npm install
```

#### Frontend Setup
```bash
cd frontend
npm install
```

### Configuration

1. **Backend Environment** - Create `.env` file in backend folder:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

2. **Frontend API** - Update API endpoint in frontend components (default: http://localhost:5000)

### Running the Project

#### Start MongoDB
```bash
# If MongoDB is installed locally
mongod
```

#### Start Backend
```bash
cd backend
npm run dev
```
Backend runs on: `http://localhost:5000`

#### Start Frontend
```bash
cd frontend
npm start
```
Frontend runs on: `http://localhost:3000`

## 📱 Features in Detail

### Hero Section
- Animated gradient background with particles
- Creative typography with gradient text
- Smooth scroll indicator
- Call-to-action buttons with hover effects

### Projects Showcase
- Interactive project cards with hover animations
- Filter by category
- Click to view detailed case studies
- Modal overlay with full case study information

### Case Study Modal
- Problem statement
- Research & insights
- Wireframes display
- Final UI screens showcase
- Results & metrics
- Smooth animations and transitions

### Contact Form
- Form validation
- Real-time status messages
- API integration for email submission
- Social media links
- Multiple contact methods display

### AI Chat Assistant
- Floating chat bubble
- Quick reply suggestions
- Message history
- Smooth animations
- Minimizable interface

## 🎯 API Endpoints

### Contact Routes
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `GET /api/contact/:id` - Get specific message
- `PATCH /api/contact/:id` - Update message status
- `DELETE /api/contact/:id` - Delete message

### Projects Routes
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get specific project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

## 🎨 Customization

### Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  neon: {
    blue: '#0ea5e9',
    purple: '#a855f7',
    pink: '#ec4899',
    cyan: '#06b6d4',
  }
}
```

### Typography
Modify font weights, sizes in Tailwind config or component files

### Animation Speed
Adjust animation durations in Framer Motion props within components

### Content
Update `frontend/src/data/projectsData.js` with your own projects and skills

## 📦 Deployment

### Frontend - Vercel/Netlify
```bash
cd frontend
npm run build
```

### Backend - Heroku/Railway/Render
1. Deploy backend repository
2. Set environment variables
3. Update frontend API endpoint to production URL

## 🔒 Security Notes

- Validate all form inputs on backend
- Use environment variables for sensitive data
- Implement rate limiting on API endpoints
- add authentication for admin routes (future update)

## 🚧 Future Enhancements

- [ ] Admin dashboard for content management
- [ ] Blog section
- [ ] Service integration (Emailjs, SendGrid)
- [ ] Image optimization and CDN
- [ ] Performance monitoring
- [ ] SEO optimization
- [ ] Multi-language support
- [ ] Analytics integration

## 📄 License

MIT License - Feel free to use for personal or commercial projects

## 👨‍💻 Contributing

Contributions are welcome! Feel free to submit pull requests.

## 📞 Support

For issues or suggestions, please create an issue in the repository.

---

**Made with ❤️ for creative professionals**
