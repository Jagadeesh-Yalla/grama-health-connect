<div align="center">

<!-- Replace this with your own project banner/screenshot -->
<img width="1200" height="475" alt="Grama Health Connect banner" src="Screenshot 2026-09-15 200411.png" />

# 🏥 Grama Health Connect

**Bringing quality healthcare access to rural communities**

A telehealth platform connecting patients in rural areas with doctors — appointment booking, real-time chat, and an AI-powered health assistant, built for low-connectivity, multilingual use.

</div>

---

## ✨ Features

- **Patient Portal** — register/login by mobile number, browse doctors by specialization, book appointments, track appointment status
- **Doctor Portal** — manage profile & availability, view incoming appointments, accept/manage patient queue
- **Real-time Chat** — direct messaging between a patient and their doctor for a booked appointment
- **Sahayak AI Assistant** — Gemini-powered chatbot that answers general health questions and helps patients navigate the app, in simple language suited for rural users
- **Multilingual UI** — English toggle built in (extendable to regional languages)
- **Persistent local database** — all data (patients, doctors, appointments, messages) stored in SQLite, no external DB service required

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React + TypeScript, Vite, Tailwind CSS |
| Backend    | Express.js (Node.js), TypeScript     |
| Database   | SQLite (via `better-sqlite3`)        |
| AI         | Google Gemini API (`@google/genai`)  |

The frontend and backend run as a **single Express process** — Vite is mounted in middleware mode, so one server serves both the API and the React app. No separate frontend/backend deployments needed.

---

## 📂 Project Structure

```
grama-health-connect/
├── server.ts           # Express server: API routes, SQLite setup, Vite middleware, Gemini integration
├── src/
│   ├── App.tsx          # Main React app — all views (patient, doctor, chat, Sahayak)
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── .env.example          # Template for required environment variables
```

---

## 🚀 Run Locally

**Prerequisites:** Node.js 18+

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/Jagadeesh-Yalla/grama-health-connect.git
   cd grama-health-connect
   npm install
   ```

2. **Set up environment variables**

   Create a `.env` file in the project root (copy from `.env.example`):
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   Get a free key from [Google AI Studio](https://aistudio.google.com/apikey). This is only required for the Sahayak chatbot — the rest of the app works without it.

3. **Run the app**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

   On first run, `server.ts` automatically creates `healthcare.db` (SQLite) with all required tables — no manual database setup needed.

---

## 🗄️ Database Schema

| Table          | Purpose                                             |
|----------------|------------------------------------------------------|
| `patients`     | Patient accounts (id, name, mobile, address, etc.)   |
| `doctors`      | Doctor accounts (id, name, phone, specialization, availability) |
| `appointments` | Bookings linking a patient to a doctor, with status  |
| `messages`     | Chat messages between a patient and doctor pair      |

---

## 🔌 API Overview

| Method | Endpoint                              | Description                         |
|--------|----------------------------------------|--------------------------------------|
| POST   | `/api/patients/register`               | Register a new patient               |
| GET    | `/api/patients/:mobile`                | Fetch patient by mobile number       |
| POST   | `/api/doctors/register`                | Register/update a doctor profile     |
| GET    | `/api/doctors`                         | List all doctors                     |
| POST   | `/api/appointments`                    | Book an appointment                  |
| GET    | `/api/appointments/patient/:patientId` | Get a patient's appointments         |
| GET    | `/api/appointments/doctor/:doctorId`   | Get a doctor's appointments          |
| POST   | `/api/messages`                        | Send a chat message                  |
| GET    | `/api/messages/:doctorId/:patientId`   | Fetch a conversation                 |
| POST   | `/api/chatbot`                         | Ask Sahayak (Gemini-powered) a question |

---

## ☁️ Deployment

This app needs a host with **persistent disk storage** (not pure serverless), since SQLite is a local file. Recommended: [Render](https://render.com).

- **Build command:** `npm install && npm run build`
- **Start command:** `npx tsx server.ts`
- **Environment variables:** `GEMINI_API_KEY`, `NODE_ENV=production`
- **Persistent disk:** required, mounted at the project root, so `healthcare.db` survives restarts/redeploys

---

## 👤 Author

**Jeevan (Yalla Jivana Jagadish Kumar)**
B.Tech Computer Science, BVCITS (JNTUK)
[GitHub](https://github.com/Jagadeesh-Yalla)

---

## 📄 License

This project is open for educational and personal portfolio use.