# 🏥 MediTrack

A RESTful backend API for managing medicines and pharmacies, built with **Node.js**, **Express**, and **MongoDB**.  
MediTrack helps in keeping track of medicines, including their stock, pricing, and associated pharmacy information.

---

## 🚀 Features

- **CRUD operations** for medicines (fields: name, price, stock, pharmacy reference).  
- **Secure authentication** using JWT-based middleware.  
- **Modular architecture** using controllers, models, routes, and middleware.  
- **Config-driven** environment settings via a `.env` file.  
- **Scalable foundation** for further extensions, including pharmacy or user management.

---

## 📂 Project Structure

Meditrack/
├── config/ # Configuration files (database setup, environment settings)

├── controllers/ # Business logic and request handling

├── middleware/ # Authentication, error handling, etc.

├── models/ # Mongoose schemas (Medicine, Pharmacy, etc.)

├── routes/ # Express API route definitions

├── server.js # Application entry point

├── .env # Environment settings (should not be committed)

├── package.json # Dependencies & scripts

└── README.md # Project documentation


---

## 🛠 Tech Stack

- **Node.js** + **Express.js** — Framework for RESTful API.  
- **MongoDB** + **Mongoose** — NoSQL database and ORM.  
- **dotenv** — Environment variable management.  
- **JWT (jsonwebtoken)** — API route protection.  
- **CORS, morgan** — Optional middleware for handling cross-origin requests and logging.  

---

## 🔑 Authentication

Most routes are **protected** and require a **JWT token**.  
Include the following header in your HTTP requests:


📖 Other Endpoints

GET /api/medicines — Fetch all medicines

GET /api/medicines/:id — Fetch a specific medicine by ID

PUT /api/medicines/:id — Update a medicine

DELETE /api/medicines/:id — Delete a medicine

