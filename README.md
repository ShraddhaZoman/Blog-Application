# Blog Application

This is a full-stack blog application built using **MongoDB, React, and Node.js (MERN stack)**. It allows users to create, read, update, and delete blog posts while handling authentication and file uploads.

## Features
- User authentication (Register/Login)
- Create, edit, and delete blog posts
- Upload images for blog posts
- Manage categories for blog posts
- Secure API endpoints with JWT authentication
- Uses **MongoDB** as the database
- Frontend built with **React**
- Backend built with **Node.js and Express.js**

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **File Uploads**: Multer
- **CORS Handling**: CORS package

---

## Getting Started
### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/blog-app.git
cd blog-app
```

### 2. Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd frontend
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the **backend** directory and add the following:
```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the Application
#### Start Backend Server
```sh
cd backend
node index.js
```
#### Start Frontend Server
```sh
cd frontend
npm start
```

### 5. API Endpoints
- **User Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login user
- **User Management**
  - `GET /api/users/:id` - Get user details
  - `PUT /api/users/:id` - Update user details
  - `DELETE /api/users/:id` - Delete user
- **Blog Posts**
  - `POST /api/posts` - Create a post
  - `GET /api/posts` - Get all posts
  - `GET /api/posts/:id` - Get a single post
  - `PUT /api/posts/:id` - Update a post
  - `DELETE /api/posts/:id` - Delete a post
- **Categories**
  - `POST /api/categories` - Create a category
  - `GET /api/categories` - Get all categories

---

## Project Structure
```
blog-app/
├── backend/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── posts.js
│   │   ├── categories.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Category.js
│   ├── index.js
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   ├── package.json
│
└── README.md
```

## License
This project is open-source and available under the MIT License.

---

## Contributing
Feel free to fork this repository and make improvements. Pull requests are welcome!

---

### Contact
If you have any issues or questions, feel free to reach out!



Blog Preview
![Screenshot 2025-03-17 174803](https://github.com/user-attachments/assets/023f6722-7bdb-4347-bbb9-ef8090fa6ea8)
![Screenshot 2025-03-17 174824](https://github.com/user-attachments/assets/d5525e9b-6408-4ecb-917c-d908a3344716)
![Screenshot 2025-03-17 174912](https://github.com/user-attachments/assets/c1b8af13-47ba-4657-9146-0de5b2f1c852)
![Screenshot 2025-03-17 175037](https://github.com/user-attachments/assets/4bc11289-d632-4c6d-9ac0-8c6189bf3875)
