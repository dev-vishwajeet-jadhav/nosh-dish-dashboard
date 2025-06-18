# 🍽️ NOSH Dish Management Dashboard

This is a full-stack food dashboard built as part of the **Backend Developer Assignment** for NOSH.

---

## 📅 Assignment Info

- 📧 Assignment received: **13th June 2025**
- ⏳ Deadline: 3 days
- ✅ Project completed before the deadline

---

## ✨ Features

- Lists all dishes with image, name, and publish status
- Toggle **Publish / Unpublish** status with a single click
- Fully responsive, modern UI styled to match [letsnosh.io](https://www.letsnosh.io)
- Built entirely with open-source, free tools
- Local MongoDB database — no hosting required

🎥 Demo Videos
UI Warlkthrough - https://www.loom.com/share/371c14a2c206495f9eae9cf216279e2b?sid=163fd9cc-c3ff-4e19-8975-7335561614b5
Code Explanation -  https://www.loom.com/share/d5c8622a1e9a40aabd1eae748b4f173b?sid=94824688-ca0b-4803-b4cf-a8b57d4bee85


## 🧠 Tech Stack Used

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | React.js, Axios      |
| Backend     | Node.js, Express.js  |
| Database    | MongoDB, Mongoose    |
| Styling     | Inline CSS, Poppins Font |
| Tools       | Postman, MongoDB Compass, VS Code |

---

## 🔧 Folder Structure

nosh-dish-dashboard/
├── backend/ # Node.js + MongoDB backend
├── frontend/ # React.js frontend
└── README.md # Project description and setup

## 🚀 Setup Instructions

### 1. Start MongoDB locally  
Ensure MongoDB is running on `mongodb://127.0.0.1:27017`

### 2. Backend Setup

```bash
cd backend
npm install
node seed.js      # Insert 25 Indian dishes
node server.js    # Start server at localhost:4000

cd frontend
npm install
npm start  


