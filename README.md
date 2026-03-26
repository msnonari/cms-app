# CMS App

A simple Content Management System (CMS) application built with Node.js, Express.js, MongoDB, and EJS. This application allows users to create accounts, manage posts, and provides an admin panel for content management.

## Features

- User registration and authentication
- Post creation, editing, and deletion
- Admin dashboard for managing users and posts
- Responsive design with Bootstrap
- Session-based authentication
- EJS templating for dynamic views

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS, Bootstrap, CSS, JavaScript
- **Authentication**: Express Session
- **Development**: Nodemon for hot reloading

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/msnonari/cms-app.git
   cd cms-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```
   MONGODB_URI=mongodb://localhost:27017/cms-app
   PORT=3000
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

- **Public Pages**: View posts, about, and contact pages
- **User Registration**: Create an account to access user features
- **User Login**: Log in to manage your posts
- **Admin Panel**: Access admin features at `/admin` (requires admin privileges)

## Project Structure

```
cms-app/
├── config/
│   └── db.js                 # Database connection
├── controllers/
│   ├── adminController.js    # Admin panel logic
│   ├── pageController.js     # Public page logic
│   ├── postController.js     # Post management logic
│   └── userController.js     # User authentication logic
├── middlewares/
│   └── auth.js               # Authentication middleware
├── models/
│   ├── Post.js               # Post model
│   └── User.js               # User model
├── public/
│   ├── admin/                # Admin panel assets
│   └── assets/               # Public assets
├── routes/
│   ├── adminRoutes.js        # Admin routes
│   ├── pageRoutes.js         # Public page routes
│   ├── postRoutes.js         # Post routes
│   └── userRoutes.js         # User routes
├── views/
│   ├── admin/                # Admin templates
│   ├── partials/             # Reusable template parts
│   └── *.ejs                 # Public page templates
├── app.js                    # Main application file
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Muhammad Shafique
