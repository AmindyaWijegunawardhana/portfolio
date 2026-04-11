# Portfolio Backend

Node.js/Express backend for the futuristic portfolio website with MongoDB integration.

## 📋 API Documentation

### Contact Messages
- `POST /api/contact` - Submit new contact message
- `GET /api/contact` - Get all contacts
- `GET /api/contact/:id` - Get specific contact
- `PATCH /api/contact/:id` - Update contact status
- `DELETE /api/contact/:id` - Delete contact

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get specific project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## 📦 Installation

```bash
npm install
```

## ⚙️ Configuration

1. Create `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

2. Start MongoDB:
```bash
mongod
```

## 🚀 Running

Development (with auto-reload):
```bash
npm run dev
```

Production:
```bash
npm start
```

Server runs on `http://localhost:5000`

## 📚 Request Examples

### Submit Contact Message
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Website Inquiry",
    "message": "I would like to collaborate..."
  }'
```

### Get All Projects
```bash
curl http://localhost:5000/api/projects
```

## 🔧 Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- CORS

## 📦 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **cors**: Cross-origin middleware
- **dotenv**: Environment variables
- **nodemailer**: Email service (optional)
- **validator**: Data validation

## 🚀 Deployment

Deploy to Heroku, Railway, Render, or similar:

1. Set environment variables on hosting platform
2. Ensure MongoDB URI is production database
3. Deploy from git repository

## 🔒 Security

- Input validation on all routes
- CORS enabled for frontend origin
- Error handling with status codes
- Environment variable management

## 🐛 Troubleshooting

- MongoDB connection issues: Ensure MongoDB is running
- CORS errors: Check frontend origin in server.js
- Port conflicts: Change PORT in .env file

## 📝 Future Enhancements

- [ ] Authentication & Authorization
- [ ] Rate limiting
- [ ] Email notifications
- [ ] File upload support
- [ ] Admin dashboard API
- [ ] Analytics tracking
