#  Finance Data Processing & Access Control Backend

##  Overview
This project is a backend system for a finance dashboard that manages financial records with role-based access control. It demonstrates backend design, API development, authentication, and data processing.

---

##  Features

-  User Authentication (JWT)
-  Role-Based Access Control (RBAC)
-  Financial Records CRUD (Create, Read, Update, Delete)
-  Record Filtering (by type, category)
-  Dashboard Summary APIs
-  Input Validation & Error Handling
-  Database Integration (MongoDB)

---

##  User Roles

| Role     | Permissions |
|----------|------------|
| Viewer   | View dashboard only |
| Analyst  | View records + dashboard |
| Admin    | Full access (CRUD + user management) |

---

##  Tech Stack

- Backend: Node.js + Express
- Database: MongoDB (Mongoose)
- Authentication: JWT
- Password Hashing: bcrypt

---

##  Project Structure
finance-backend/
│
├── src/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── app.js
│
├── server.js
├── package.json
├── .env
└── README.md


---

## ⚙️ Setup Instructions

### 1️ Clone the Repository

git clone https://github.com/Mamathareddy2005/finance-backend.git

cd finance-backend


---

### 2️⃣ Install Dependencies

npm install


---

### 3️⃣ Setup Environment Variables

Create a `.env` file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


---

### 4️⃣ Run the Server

npm run dev


Server will start on:
Server will start on:


http://localhost:5000

---

## 📡 API Endpoints

### 🔐 Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

---

### 👤 Users (Admin only)
- GET `/api/users`
- PUT `/api/users/:id`

---

### 💰 Records
- POST `/api/records`
- GET `/api/records`
- PUT `/api/records/:id`
- DELETE `/api/records/:id`

---

### 📊 Dashboard
- GET `/api/dashboard/summary`

---

## 📊 Example Dashboard Response

```json
{
  "totalIncome": 50000,
  "totalExpense": 20000,
  "netBalance": 30000
}







