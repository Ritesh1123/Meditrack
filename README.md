# MediTrack

A RESTful backend API for managing medicines and pharmacies, built with Node.js, Express, and MongoDB.

## 🚀 Features

- **CRUD operations** for medicines (name, price, stock, pharmacy reference).
- **Secure authentication** middleware (JWT-based).
- **Modular structure** using controllers, models, routes, and middleware.
- **Environment configuration** via `.env`.
- **Scalable** foundation for pharmacy & medicine management.

---

## 📂 Project Structure


---

## 🛠 Tech Stack

- **Node.js** + **Express.js** – RESTful API framework
- **MongoDB** + **Mongoose** – Database & ODM
- **dotenv** – Environment variables
- **JWT (jsonwebtoken)** – Authentication
- **cors, morgan** (optional) – Middleware

---

## 🔑 Authentication

Most routes are **protected** and require a **JWT token**.

Add this header in your requests:


---

## 📌 API Usage

### Create a Medicine

**POST** `/api/medicines`

- **Headers**

- **Body**
```json
{
  "name": "Paracetamol 500mg",
  "price": 25,
  "stock": 100,
  "pharmacy": "64c9b9f4e4a1c8d4b87a2f12"
}

📖 Other Endpoints

GET /api/medicines → Fetch all medicines

GET /api/medicines/:id → Fetch a medicine by ID

PUT /api/medicines/:id → Update medicine details

DELETE /api/medicines/:id → Delete medicine

⚡ Installation & Setup

1. Clone the repository

git clone https://github.com/Ritesh1123/Meditrack.git
cd Meditrack


2. Install dependencies

npm install


3. Set up environment variables
Create a .env file in the root:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


4. Run the server

npm run dev
# or
node server.js


5. Test the API
Base URL (local):

http://localhost:5000/api
