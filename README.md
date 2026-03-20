
# 📋 TodoAppCrud

A **Full-Stack Todo Application Backend** built with **Node.js, Express.js, and MongoDB** that provides secure authentication and CRUD operations for managing tasks.

This API allows users to **register, login, and manage their personal todo items** through RESTful endpoints.

---

# 🚀 Features

* User Authentication (Register & Login)
* JWT based authentication
* Create new todos
* Read all todos
* Update existing todos
* Delete todos
* MongoDB database integration
* RESTful API architecture
* CORS enabled for frontend deployment
* Secure password hashing using bcrypt
* Mark todo as completed and view incomplete and completed todos
* dockerized the backend

---

# 🛠️ Tech Stack

Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt / bcryptjs

Deployment:

* Render (Backend hosting)

Frontend (separate repo):

* React.js
* Axios
* Vercel deployment

---

# 📂 Project Structure

```
TodoAppCrud
│
├── controllers
│   ├── authController.js
│   └── todoController.js
│
├── routes
│   ├── authRoutes.js
│   └── todoRoutes.js
│
├── models
│   ├── User.js
│   └── Todo.js
│
├── middleware
│   └── auth.js
│
├── index.js
├── package.json
└── .env
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```bash
git clone https://github.com/thismahak/TodoAppCrud.git
cd TodoAppCrud
```

## 2️⃣ Install dependencies

```bash
npm install
```

## 3️⃣ Create `.env` file

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 4️⃣ Run the server

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

# 🔑 API Endpoints

## Authentication

### Register User

```
POST /api/auth/register
```

Body:

```json
{
"name": "Mahak",
"email": "mahak@example.com",
"password": "123456"
}
```

---

### Login User

```
POST /api/auth/login
```

Body:

```json
{
"email": "mahak@example.com",
"password": "123456"
}
```

---

## Todos

### Get All Todos

```
GET /api/todos
```

---

### Create Todo

```
POST /api/todos
```

---

### Update Todo

```
PUT /api/todos/:id
```

---

### Delete Todo

```
DELETE /api/todos/:id
```

---

# 🌐 Deployment

Backend deployed on:

```
Render
```

Frontend deployed on:

```
Vercel
```

---
# 🌐 Live Demo

Frontend (Vercel)  
https://todo-app-frontend-orcin-seven.vercel.app

Backend API (Render)  
https://todoappcrud.onrender.com
---

# 📌 Future Improvements

* Task priority levels
* Due date reminders
* Search & filter todos
* Pagination
* Email notifications
* Dark mode UI

---

# 👩‍💻 Author

**Mahak Gupta**

BCA – Web Development
Aspiring MERN Stack Developer

GitHub
[https://github.com/thismahak](https://github.com/thismahak)

---

# ⭐ Support

If you like this project, please ⭐ the repository.

---
