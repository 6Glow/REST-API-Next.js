# Next.js REST API with MongoDB

A modern, full-featured REST API built with Next.js 14, MongoDB, and TypeScript, featuring user authentication, blog management, and category organization.

## 🚀 Features

- **User Management**
  - User registration and authentication
  - Secure password handling
  - Profile management

- **Blog Management**
  - Create, read, update, and delete blog posts
  - Category-based organization
  - Search functionality with keywords
  - Date-based filtering
  - Pagination support

- **Category System**
  - Create and manage blog categories
  - Category-based blog organization
  - User-specific categories

- **API Security**
  - Token-based authentication
  - Request validation
  - Error handling
  - Middleware support

## 🛠️ Tech Stack

- Next.js 14
- MongoDB with Mongoose
- TypeScript
- RESTful API design
- Authentication middleware
- Logging system

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/6Glow/REST-API-Next.js.git
cd rest-api-next.js
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```env
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:
```bash
npm run dev
```

## 🔑 API Endpoints

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `PATCH /api/users` - Update user
- `DELETE /api/users` - Delete user

### Categories
- `GET /api/categories` - Get user categories
- `POST /api/categories` - Create category
- `PATCH /api/categories/{categoryId}` - Update category
- `DELETE /api/categories/{categoryId}` - Delete category

### Blogs
- `GET /api/blogs` - Get blogs with filters
- `POST /api/blogs` - Create blog
- `GET /api/blogs/{blogId}` - Get specific blog
- `PATCH /api/blogs/{blogId}` - Update blog
- `DELETE /api/blogs/{blogId}` - Delete blog

## 📝 API Usage

### Authentication
Include the authentication token in the request headers:
```javascript
headers: {
  'Authorization': 'Bearer your_token_here'
}
```

### Query Parameters
- `userId` - User identifier
- `categoryId` - Category identifier
- `keywords` - Search keywords
- `startDate` - Filter start date
- `endDate` - Filter end date
- `page` - Page number for pagination
- `limit` - Items per page

### Example Request
```javascript
// Get blogs with filters
GET /api/blogs?userId=123&categoryId=456&keywords=tech&page=1&limit=10
```

## 🔒 Security

- Authentication middleware validates tokens
- Request validation for required fields
- MongoDB connection security
- Error handling and logging

## 📊 Project Structure

```
├── app/
│   ├── api/
│   │   ├── (auth)/
│   │   │   └── users/
│   │   └── (dashboard)/
│   │       ├── blogs/
│   │       └── categories/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── db.ts
│   └── models/
│       ├── blog.ts
│       ├── category.ts
│       └── user.ts
└── middlewares/
    └── api/
        ├── authMiddleware.ts
        └── logMiddleware.ts
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB team for the reliable database
- Open source community for inspiration and support
