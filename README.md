# Event Management Dashboard 🎟️

A full-stack **Event Management System** where admins can create and manage events, and users can browse, register, and receive email notifications for upcoming events.

This project demonstrates real-world concepts like authentication, role-based access, database relationships, and scheduled email notifications.

---

## 📽️ Demo Video

👉 **Project Demonstration Video**  
https://drive.google.com/file/d/1SYLqSZSCUUkRBe4zILFbAGGdslA6t_tR/view

---

## ✨ Features

### 👤 Authentication & Roles
- User registration & login
- Admin registration & login
- JWT-based authentication
- Role-based access control (Admin / User)

---

### 🛠️ Admin Features
- Create events with:
  - Title
  - Date & time
  - Location
  - Description
- View events created by:
  - Self
  - Other admins
- Events created by admins are visible to all users
- Email reminder system for registered users

---

### 🙋 User Features
- Browse all available events
- Register for events
- View "My Registrations"
- Persistent login (session survives refresh)
- Email notifications before event start
- Password visibility toggle (Show / Hide password)

---

### 📧 Email Notifications
- Confirmation on event registration (optional)
- Reminder email **before event starts**
- Uses scheduled background jobs

---

## 🧰 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS (custom styling)
- JWT (stored securely)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Nodemailer (Email service)
- node-cron (Scheduled jobs)

### Tools
- MongoDB Compass
- Postman
- Git & GitHub

---

## 📁 Project Structure

```

event-management-dashboard/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── jobs/
│   │   └── eventReminder.js
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   │   └── mailer.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
├── .gitignore
└── README.md

````

---

## ⚙️ Setup Instructions (Run Locally)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/event-management-dashboard.git
cd event-management-dashboard
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

#### Create `.env` file inside `backend/`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

⚠️ **Note:**
Use **Gmail App Password**, not your Gmail login password.

---

### Start Backend Server

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🧪 API Testing

* Use **Postman** to test authentication, event creation, and registrations
* All APIs are REST-based

---

## 🔐 Environment Variables Summary

| Variable   | Description               |
| ---------- | ------------------------- |
| MONGO_URI  | MongoDB connection string |
| JWT_SECRET | JWT signing secret        |
| EMAIL_USER | Sender email              |
| EMAIL_PASS | Gmail App Password        |

---

## 🚀 Future Enhancements

* Admin analytics dashboard
* SMS / WhatsApp notifications
* Event image uploads
* Pagination & filters
* Production deployment (Render / Vercel)
* OAuth login (Google)

---
