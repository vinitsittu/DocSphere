# DocSphere – Secure Document Management System

DocSphere is a secure web-based document management system built using HTML, CSS, JavaScript for the frontend and Node.js, Express.js, MongoDB for the backend. It allows users to register, log in, upload, search, download, and delete documents with JWT-based authentication.

## Features
- User Registration & Login (JWT Authentication)
- Secure File Upload & Download
- Manage and Delete Files
- Search Documents by Name
- Encrypted Password Storage (bcrypt)
- REST API using Express.js
- MongoDB for Data Storage

## Tech Stack
Frontend: HTML, CSS, JavaScript  
Backend: Node.js, Express.js, MongoDB  
Authentication: JWT and bcrypt  
File Uploads: Multer

## Installation and Setup

### 1. Clone the Repository
git clone https://github.com/your-username/docsphere.git  
cd docsphere

### 2. Install Backend Dependencies
cd backend  
npm install

### 3. Configure Environment Variables
Create a `.env` file inside the `backend` folder:
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key

### 4. Start the Backend Server
npm run dev

### 5. Open the Frontend
Open `frontend/index.html` directly in your browser  
or run:  
cd frontend  
npx serve .

## Folder Structure
DocSphere/  
│── backend/  
│   ├── config/  
│   ├── controllers/  
│   ├── middleware/  
│   ├── models/  
│   ├── routes/  
│   ├── services/  
│   └── server.js  
│  
│── frontend/  
│   ├── css/  
│   ├── js/  
│   ├── pages/  
│   └── index.html  

## Author
Name: Vinit Kumar Modanwal  
Email: vinitkumar270503@gmail.com
