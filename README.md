📄 DocSphere – Secure Document Management System
DocSphere is a secure web-based document management system built with HTML, CSS, JavaScript (Frontend) and Node.js, Express.js, MongoDB (Backend).

It allows users to register, log in, upload, search, download, and delete documents with JWT-based authentication.

🚀 Features
✅ User Registration & Login (JWT Authentication)
✅ Secure File Upload & Download
✅ Manage & Delete Files
✅ Search Documents by Name
✅ Professional & Responsive UI
✅ Encrypted Passwords using bcrypt
✅ REST API using Express.js
✅ MongoDB for Data Storage

📂 Tech Stack
Frontend
HTML

CSS

JavaScript (Vanilla JS)

LocalStorage (for storing JWT token)

Backend
Node.js & Express.js

MongoDB with Mongoose

JWT for authentication

Multer for file uploads

bcrypt for password hashing

🛠️ Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/docsphere.git
cd docsphere
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file inside backend/

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the backend server

bash
Copy
Edit
npm run dev    # for development
npm start      # for production
3️⃣ Frontend Setup
Simply open the index.html file in a browser OR run:

bash
Copy
Edit
cd frontend
npx serve .
(Or use Live Server in VS Code)

📁 Folder Structure
csharp
Copy
Edit
docsphere/
│── backend/
│   ├── config/           # MongoDB connection
│   ├── controllers/      # API logic
│   ├── middleware/       # Auth & error handling
│   ├── models/           # MongoDB Schemas
│   ├── routes/           # Express Routes
│   ├── services/         # Business Logic
│   └── server.js         # Entry point
│
│── frontend/
│   ├── css/              # Styling
│   ├── js/               # Frontend Logic
│   ├── pages/            # HTML Pages
│   └── index.html        # Landing Page
🔑 API Endpoints
Method	Endpoint	Description	Auth Required
POST	/api/auth/register	Register new user	❌
POST	/api/auth/login	Login user (Get token)	❌
POST	/api/docs/upload	Upload a document	✅
GET	/api/docs/list	Get all documents	✅
GET	/api/docs/download/:id	Download document	✅
DELETE	/api/docs/delete/:id	Delete document	✅

📌 Future Improvements
✅ Role-based access (Admin/User)
✅ Drag-and-drop file uploads
✅ Cloud storage support (AWS/GCP)
✅ Email verification and password reset

👨‍💻 Author
Developed by Vinit Kumar Modanwal
📧 Email: vinitkumar270503@gmail.com

