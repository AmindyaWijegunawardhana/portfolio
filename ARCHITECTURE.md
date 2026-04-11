# 📊 Project Architecture & Overview

## 🏗️ Technology Stack

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND (React)                 │
├─────────────────────────────────────────────────────┤
│ • React 18                                          │
│ • Tailwind CSS 3.4                                  │
│ • Framer Motion (animations)                        │
│ • React Icons                                       │
│ • Axios (HTTP client)                               │
│ • React Router (navigation)                         │
└─────────────────────────────────────────────────────┘
                          ↕️ API Calls
┌─────────────────────────────────────────────────────┐
│                  BACKEND (Node.js)                  │
├─────────────────────────────────────────────────────┤
│ • Express.js (web framework)                        │
│ • MongoDB (database)                                │
│ • Mongoose (ODM)                                    │
│ • CORS (cross-origin)                               │
│ • Nodemailer (email - optional)                     │
└─────────────────────────────────────────────────────┘
                          ↕️
┌─────────────────────────────────────────────────────┐
│                     MONGODB                         │
├─────────────────────────────────────────────────────┤
│ Collections:                                        │
│ • Contacts (form submissions)                       │
│ • Projects (portfolio projects)                     │
└─────────────────────────────────────────────────────┘
```

## 📁 Complete Directory Tree

```
portfolio/
├── .git/                          # Git repository
├── .gitignore                     # Git ignore rules
├── .vscode/                       # VS Code config
│   ├── extensions.json            # Recommended extensions
│   └── settings.json              # Editor settings
│
├── 📚 Documentation
│   ├── README.md                  # Main documentation
│   ├── QUICK_START.md             # Quick setup guide
│   ├── SETUP.md                   # Detailed installation
│   ├── DESIGN_SYSTEM.md           # Design tokens & guide
│   ├── FEATURES.md                # Feature showcase
│   └── ARCHITECTURE.md            # This file
│
├── 📱 frontend/
│   ├── public/
│   │   ├── index.html             # HTML entry point
│   │   └── favicon.ico            # Website icon
│   │
│   ├── src/
│   │   ├── components/            # React components
│   │   │   ├── Navigation.jsx     # Top navigation bar
│   │   │   ├── Hero.jsx           # Hero section
│   │   │   ├── About.jsx          # About section
│   │   │   ├── Projects.jsx       # Projects showcase
│   │   │   ├── CaseStudy.jsx      # Case study modal
│   │   │   ├── Skills.jsx         # Skills section
│   │   │   ├── Experience.jsx     # Experience timeline
│   │   │   ├── Contact.jsx        # Contact form
│   │   │   ├── Footer.jsx         # Footer section
│   │   │   ├── AIChat.jsx         # AI chat assistant
│   │   │   └── index.js           # Component exports
│   │   │
│   │   ├── context/               # React context
│   │   │   └── ThemeContext.jsx   # Dark/light mode
│   │   │
│   │   ├── data/                  # Static data
│   │   │   └── projectsData.js    # Projects, skills, experience
│   │   │
│   │   ├── pages/                 # Page components
│   │   ├── App.jsx                # Main app component
│   │   ├── index.jsx              # React DOM entry
│   │   └── index.css              # Global styles
│   │
│   ├── .env.example               # Environment template
│   ├── .gitignore                 # Frontend git ignore
│   ├── package.json               # NPM dependencies
│   ├── package-lock.json          # Dependency lock
│   ├── tailwind.config.js         # Tailwind config
│   ├── postcss.config.js          # PostCSS config
│   ├── README.md                  # Frontend README
│   └── node_modules/              # Dependencies
│
├── 🔧 backend/
│   ├── models/                    # MongoDB schemas
│   │   ├── Contact.js             # Contact message model
│   │   └── Project.js             # Project model
│   │
│   ├── controllers/               # Route handlers
│   │   ├── contactController.js   # Contact handlers
│   │   └── projectController.js   # Project handlers
│   │
│   ├── routes/                    # API routes
│   │   ├── contact.js             # Contact routes
│   │   └── projects.js            # Project routes
│   │
│   ├── server.js                  # Express server
│   ├── .env                       # Environment variables
│   ├── .env.example               # Environment template
│   ├── .gitignore                 # Backend git ignore
│   ├── package.json               # NPM dependencies
│   ├── package-lock.json          # Dependency lock
│   ├── README.md                  # Backend README
│   └── node_modules/              # Dependencies
│
└── package.json                   # Root package.json
```

## 🔄 Data Flow

```
User Interaction
     ↓
React Component
     ↓
State Update (React)
     ↓
Render Component
     ↓
Animation (Framer Motion)
     ↓
Display to User

---

Form Submission
     ↓
Axios HTTP POST
     ↓
Express Router
     ↓
Controller Function
     ↓
MongoDB Mongoose Query
     ↓
Database Operation
     ↓
Response JSON
     ↓
React State Update
     ↓
Visual Feedback to User
```

## 🌐 API Endpoints Map

```
BASE URL: http://localhost:5000/api

Contact Endpoints:
├── POST   /contact                Create new message
├── GET    /contact                Get all messages
├── GET    /contact/:id            Get specific message
├── PATCH  /contact/:id            Update message status
└── DELETE /contact/:id            Delete message

Project Endpoints:
├── GET    /projects               Get all projects
├── GET    /projects/featured      Get featured only
├── GET    /projects/:id           Get specific project
├── POST   /projects               Create project (admin)
├── PUT    /projects/:id           Update project (admin)
└── DELETE /projects/:id           Delete project (admin)

Health Check:
└── GET    /health                Server status
```

## 🎯 Component Hierarchy

```
App
├── Navigation
│   └── ThemeToggle
├── Hero
│   ├── BackgroundAnimation
│   └── CTA Buttons
├── About
│   ├── ProfileImage
│   ├── Timeline
│   └── StatCards
├── Projects
│   ├── FilterButtons
│   └── ProjectCard (multiple)
│       └── CaseStudy Modal
├── Skills
│   ├── SkillCategory (multiple)
│   └── ProgressBars
├── Experience
│   ├── Timeline
│   └── AchievementCards
├── Contact
│   ├── ContactForm
│   ├── ContactInfo
│   └── SocialLinks
├── Footer
│   ├── Navigation Links
│   ├── Newsletter Signup
│   └── Social Links
└── AIChat
    ├── FloatingButton
    ├── ChatMessages
    ├── QuickReplies
    └── InputField
```

## 💾 Database Schema

### Contact Collection

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String, // 'new', 'read', 'replied'
  createdAt: Date
}
```

### Project Collection

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  image: String,
  tags: [String],
  role: String,
  impact: String,
  featured: Boolean,
  caseStudy: {
    problem: String,
    research: String,
    insights: [String],
    wireframes: String,
    finalScreens: [String],
    metrics: String
  },
  createdAt: Date
}
```

## 🔐 Security Features

```
Frontend:
├── Input validation (client-side)
├── XSS prevention (React escaping)
├── CORS protection
└── Environment variables for API URL

Backend:
├── Input validation (server-side)
├── Mongoose schema validation
├── Error handling middleware
├── CORS configuration
└── Environment variables for secrets
```

## ⚡ Performance Optimizations

```
Frontend:
├── Lazy loading components
├── CSS animations (GPU accelerated)
├── Image optimization
├── Code splitting (React)
├── Memoization with React.memo
└── Debounced events

Backend:
├── Database indexing
├── Query optimization
├── Error caching
├── Connection pooling
└── Response compression
```

## 🎨 Styling Architecture

```
Tailwind CSS (Utility-first)
├── Color System (Neon palette)
├── Typography Scale
├── Spacing System
├── Breakpoints (Responsive)
├── Animations
├── Shadows
└── Border Radius

CSS-in-JS (Inline styles)
├── Dynamic styles
├── Animation keyframes
├── Custom properties
└── Media queries

Framer Motion
├── Component animations
├── Gesture animations
├── Layout animations
└── Scroll animations
```

## 📊 State Management

```
Global State:
└── ThemeContext
    ├── isDark (boolean)
    └── toggleTheme (function)

Component State:
├── Navigation
├── Hero
├── Projects (selectedProject, filter)
├── Contact (formData, status, loading)
├── AIChat (isOpen, messages, input, loading)
└── Skills (none - static)
```

## 🚀 Build & Deploy Process

```
Development
├── npm install
├── npm run dev
└── Localhost testing

Building for Production
├── npm run build
├── Output: dist/ folder
└── Minification & optimization

Deployment
├── Frontend → Vercel/Netlify
├── Backend → Heroku/Railway
└── Database → MongoDB Atlas
```

## 📈 Scalability Considerations

```
Current Architecture:
├── Single MongoDB database
├── Single Express server
├── Client-side rendering

Future Scalability:
├── Database replication
├── Server clustering
├── Caching layer (Redis)
├── CDN for assets
├── Load balancing
└── Microservices (if needed)
```

---

**Architecture Version**: 1.0
**Last Updated**: April 2024
**Stack**: MERN (MongoDB, Express, React, Node.js)
