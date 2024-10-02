# 📚 Express & React Application: User and Post Management

This project demonstrates how to create an Express.js application with Mongoose schemas that reference each other. It includes a React frontend that interacts with the backend to manage users and posts effectively.

## 🌐 Demo

- Frontend Link: [Click here](https://schema-reference.vercel.app/home)  
- Backend Link: [Click here](https://schema-reference-backend.vercel.app)  
- Frontend Repository Link: [Click here](https://github.com/nks854338/schemaReference)  
- Backend Repository Link: [Click here](https://github.com/nks854338/schemaReferenceBackend)  

## ✨ Features

### Backend (Express.js)
- **User Management**: Create and manage users with unique emails.
- **Post Management**: Create posts linked to specific users using Mongoose schema referencing.
- **Data Retrieval**: Fetch all posts with user information populated for easy access.

### Frontend (React.js)
- **User Form**: Input form for creating new users.
- **Post Form**: Input form for creating new posts linked to users.
- **Data Display**: View the list of posts along with the corresponding user details.

---

## 🚀 Technologies

- **Backend**: Node.js, Express.js, Mongoose, MongoDB
- **Frontend**: React.js, Axios
- **Other**: JavaScript (ES6+), HTML, CSS

---

## 🎨 Frontend

### React Components
- **HomePage**: Main interface to manage users and posts, allowing for data submission and display.
- **CreateUser**: Component to create a new user.
- **CreatePost**: Component to create a new post linked to an existing user.
- **PostList**: Component to display all posts with their associated user information.

### Axios Services
- **userService.js**: Handles API requests for user management (creating users).
- **postService.js**: Handles API requests for post management (creating posts and fetching posts).

---

## 📋 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
