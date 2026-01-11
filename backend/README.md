# KWCO Law Firm Blog Backend

A comprehensive backend system for managing the KWCO Law Firm blog with admin authentication, blog management, and image uploads.

## Features

- **User Authentication**: JWT-based authentication for admin users
- **Blog Management**: CRUD operations for blog posts
- **Image Upload**: Automatic image processing and optimization
- **Role-based Access**: Admin and Editor roles with different permissions
- **Search & Filtering**: Advanced search and category filtering
- **Dashboard Analytics**: Blog statistics and insights

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. **Clone the repository and navigate to backend directory**

   ```bash
   cd kwco_website/backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   ```bash
   cp env.example .env
   ```

   Edit `.env` file with your configuration:

   ```env
   MONGODB_URI=mongodb://localhost:27017/kwco-blog
   JWT_SECRET=your-super-secret-jwt-key
   PORT=5000
   NODE_ENV=development
   ```

4. **Start MongoDB**

   ```bash
   # On Windows
   mongod

   # On macOS/Linux
   sudo systemctl start mongod
   ```

5. **Create Initial Admin User**

   ```bash
   node setup.js
   ```

   This creates an admin user with:

   - Username: `admin`
   - Password: `admin123456`
   - Email: `admin@kwco.com`

6. **Start the Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Public Blog Routes

- `GET /api/blogs` - Get all published blogs
- `GET /api/blogs/:slug` - Get blog by slug
- `GET /api/blogs/featured/featured` - Get featured blogs
- `GET /api/blogs/category/:category` - Get blogs by category
- `GET /api/blogs/categories/all` - Get all categories
- `GET /api/blogs/tags/all` - Get all tags

### Admin Routes (Protected)

- `POST /api/admin/blogs` - Create new blog
- `GET /api/admin/blogs` - Get all blogs (admin view)
- `GET /api/admin/blogs/:id` - Get blog by ID
- `PUT /api/admin/blogs/:id` - Update blog
- `DELETE /api/admin/blogs/:id` - Delete blog
- `GET /api/admin/dashboard` - Get dashboard stats
- `POST /api/admin/users` - Create new user

## Database Models

### Blog Schema

- Title, excerpt, content
- Featured image with automatic processing
- Category and tags
- Author reference
- Status (draft/published)
- View count and analytics
- Automatic slug generation
- Read time calculation

### User Schema

- Username and email
- Password (hashed with bcrypt)
- Role-based permissions
- Profile information
- Activity tracking

## Image Processing

- **Automatic Resizing**: Images are resized to 800x600 for optimal performance
- **Format Conversion**: All images are converted to JPEG with 80% quality
- **File Size Limit**: 5MB maximum file size
- **Unique Naming**: UUID-based filenames to prevent conflicts

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- Role-based access control
- Input validation and sanitization
- File type and size restrictions

## Development

```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Use a strong, unique `JWT_SECRET`
3. Configure MongoDB connection string for production
4. Set up proper CORS settings for your domain
5. Use a process manager like PM2
6. Set up SSL/TLS certificates

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify network access

2. **Image Upload Failures**

   - Check file size (max 5MB)
   - Ensure file is an image format
   - Verify uploads directory permissions

3. **Authentication Errors**
   - Check JWT_SECRET in environment
   - Verify token expiration
   - Ensure user account is active

## Support

For technical support or questions, please contact the development team.

## License

MIT License - see LICENSE file for details.
