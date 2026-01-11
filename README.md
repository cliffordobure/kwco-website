# KWCO Law Firm Website

A modern, professional website for KWCO Law Firm with an integrated blog system, built with React and Node.js.

## 🌟 Features

### Frontend

- **Modern React Application** with Vite build tool
- **Responsive Design** using Tailwind CSS
- **Professional UI/UX** optimized for law firms
- **WhatsApp Integration** with floating contact button
- **Blog System** with search, filtering, and pagination
- **Admin Dashboard** for content management

### Backend

- **Node.js/Express** REST API
- **MongoDB** database with Mongoose ODM
- **JWT Authentication** for admin access
- **Image Upload & Processing** with automatic optimization
- **Role-based Access Control** (Admin/Editor)
- **Blog Management** with CRUD operations

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Frontend Setup

```bash
# Navigate to frontend directory
cd kwco_website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup

```bash
# Navigate to backend directory
cd kwco_website/backend

# Install dependencies
npm install

# Copy environment file
cp env.example .env

# Edit .env with your configuration
# MONGODB_URI=mongodb://localhost:27017/kwco-blog
# JWT_SECRET=your-secret-key
# PORT=5000

# Create initial admin user
node setup.js

# Start development server
npm run dev
```

## 📁 Project Structure

```
kwco_website/
├── src/                          # Frontend source code
│   ├── components/               # Reusable components
│   │   ├── Navigation.jsx       # Main navigation
│   │   ├── Footer.jsx           # Footer component
│   │   ├── WhatsAppButton.jsx   # WhatsApp contact button
│   │   ├── AdminLogin.jsx       # Admin authentication
│   │   └── AdminDashboard.jsx   # Blog management dashboard
│   ├── pages/                    # Page components
│   │   ├── Home.jsx             # Homepage
│   │   ├── About/                # About pages
│   │   ├── PracticeAreas/        # Practice area pages
│   │   ├── Blog.jsx             # Blog listing page
│   │   ├── BlogDetail.jsx       # Individual blog post
│   │   └── Admin.jsx            # Admin panel
│   ├── assets/                   # Images and static files
│   └── App.jsx                   # Main app component
├── backend/                      # Backend API
│   ├── models/                   # Database models
│   │   ├── Blog.js              # Blog schema
│   │   └── User.js              # User schema
│   ├── routes/                   # API routes
│   │   ├── auth.js              # Authentication routes
│   │   ├── blogs.js             # Public blog routes
│   │   └── admin.js             # Admin routes
│   ├── middleware/               # Custom middleware
│   │   ├── auth.js              # JWT authentication
│   │   └── upload.js            # File upload handling
│   ├── uploads/                  # Image storage
│   ├── server.js                 # Main server file
│   └── setup.js                  # Initial setup script
└── README.md                     # This file
```

## 🔐 Admin Access

### Default Credentials

- **Email**: admin@kwco.com
- **Password**: admin123456

### Admin Features

- Create, edit, and delete blog posts
- Upload and manage featured images
- Set blog status (draft/published)
- Manage categories and tags
- View analytics and statistics

### Access Admin Panel

Navigate to `/admin` in your browser after starting the backend server.

## 📝 Blog System

### Categories

- Legal Updates
- Case Studies
- Legal Advice
- Company News
- Industry Insights

### Features

- **Rich Content Editor** with HTML support
- **Image Optimization** (automatic resizing to 800x600)
- **SEO-friendly URLs** with automatic slug generation
- **Tag Management** for better organization
- **Search & Filtering** by category and keywords
- **Pagination** for better performance
- **Related Posts** suggestions
- **Social Media Sharing**

## 🖼️ Image Management

- **Automatic Processing**: Images are resized and optimized
- **Format Conversion**: All images converted to JPEG
- **File Size Limit**: Maximum 5MB per image
- **Unique Naming**: UUID-based filenames prevent conflicts
- **Storage**: Images stored in `/backend/uploads/` directory

## 🌐 API Endpoints

### Public Routes

- `GET /api/blogs` - Get all published blogs
- `GET /api/blogs/:slug` - Get blog by slug
- `GET /api/blogs/categories/all` - Get all categories
- `GET /api/blogs/tags/all` - Get all tags

### Admin Routes (Protected)

- `POST /api/admin/blogs` - Create new blog
- `PUT /api/admin/blogs/:id` - Update blog
- `DELETE /api/admin/blogs/:id` - Delete blog
- `GET /api/admin/dashboard` - Get dashboard stats

### Authentication

- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

## 🚀 Deployment

### Frontend (Vercel)

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### Backend (Production)

1. Set `NODE_ENV=production`
2. Use strong `JWT_SECRET`
3. Configure production MongoDB
4. Set up proper CORS settings
5. Use PM2 or similar process manager
6. Set up SSL/TLS certificates

## 🔧 Configuration

### Environment Variables

```env
# Backend (.env)
MONGODB_URI=mongodb://localhost:27017/kwco-blog
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
NODE_ENV=development

# Frontend (update API_BASE_URL in components)
API_BASE_URL=http://localhost:5000/api
```

### MongoDB Setup

1. Install MongoDB
2. Create database: `kwco-blog`
3. Run setup script: `node setup.js`
4. Verify admin user creation

## 📱 WhatsApp Integration

The website includes a professional WhatsApp contact button that:

- Floats on the right side of the screen
- Connects to +254792280484
- Includes pre-filled professional message
- Responsive design for all devices
- Smooth animations and hover effects

## 🎨 Customization

### Styling

- Uses Tailwind CSS for consistent design
- Custom color scheme for law firm branding
- Responsive breakpoints for all devices
- Professional typography and spacing

### Content

- Easy to update through admin panel
- SEO-optimized structure
- Professional legal content presentation
- Client-focused messaging

## 🛠️ Development

### Adding New Features

1. Create components in `/src/components/`
2. Add pages in `/src/pages/`
3. Update routing in `App.jsx`
4. Add backend routes if needed
5. Test thoroughly before deployment

### Code Style

- Use functional components with hooks
- Follow React best practices
- Maintain consistent naming conventions
- Add proper error handling
- Include loading states

## 📊 Performance

### Frontend

- Lazy loading for images
- Optimized bundle size with Vite
- Efficient state management
- Responsive image handling

### Backend

- Database indexing for fast queries
- Image optimization and caching
- Efficient pagination
- Error handling and logging

## 🔒 Security

- JWT token authentication
- Password hashing with bcrypt
- Role-based access control
- Input validation and sanitization
- File type and size restrictions
- CORS configuration

## 📞 Support

For technical support or questions about the blog system:

1. Check the backend README for detailed setup
2. Verify MongoDB connection
3. Check environment variables
4. Review server logs for errors
5. Ensure all dependencies are installed

## 📄 License

This project is proprietary to KWCO Law Firm. All rights reserved.

---

**Built with ❤️ for KWCO Law Firm**
