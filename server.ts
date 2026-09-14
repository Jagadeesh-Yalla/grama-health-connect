import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("healthcare.db");

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS patients (
    id TEXT PRIMARY KEY,
    name TEXT,
    mobile TEXT UNIQUE,
    email TEXT,
    state TEXT,
    district TEXT,
    village TEXT,
    problem TEXT
  );

  CREATE TABLE IF NOT EXISTS doctors (
    id TEXT PRIMARY KEY,
    name TEXT,
    phone TEXT UNIQUE,
    state TEXT,
    district TEXT,
    village TEXT,
    specialization TEXT,
    availability TEXT
  );

  CREATE TABLE IF NOT EXISTS appointments (
    id TEXT PRIMARY KEY,
    doctorId TEXT,
    doctorName TEXT,
    specialization TEXT,
    patientId TEXT,
    patientName TEXT,
    patientMobile TEXT,
    patientEmail TEXT,
    patientState TEXT,
    patientDistrict TEXT,
    patientVillage TEXT,
    problem TEXT,
    date TEXT,
    time TEXT,
    status TEXT DEFAULT 'pending'
  );

  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    doctorId TEXT,
    patientId TEXT,
    senderType TEXT,
    text TEXT,
    timestamp TEXT
  );
`);

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API Routes ---

  // Patients
  app.post("/api/patients/register", (req, res) => {
    const { name, mobile, email, state, district, village, problem } = req.body;
    const id = req.body.id || `patient-${Date.now()}`;
    try {
      const stmt = db.prepare("INSERT INTO patients (id, name, mobile, email, state, district, village, problem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
      stmt.run(id, name, mobile, email, state, district, village, problem);
      res.json({ success: true, id });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  app.get("/api/patients/:mobile", (req, res) => {
    const patient = db.prepare("SELECT * FROM patients WHERE mobile = ?").get(req.params.mobile);
    if (patient) res.json(patient);
    else res.status(404).json({ error: "Patient not found" });
  });

  app.put("/api/patients/:mobile", (req, res) => {
    const { name, email, state, district, village, problem } = req.body;
    try {
      const stmt = db.prepare("UPDATE patients SET name = ?, email = ?, state = ?, district = ?, village = ?, problem = ? WHERE mobile = ?");
      stmt.run(name, email, state, district, village, problem, req.params.mobile);
      res.json({ success: true });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  // Doctors
  app.post("/api/doctors/register", (req, res) => {
    const { name, phone, state, district, village, specialization, availability } = req.body;
    const id = req.body.id || `doctor-${Date.now()}`;
    try {
      const stmt = db.prepare("INSERT OR REPLACE INTO doctors (id, name, phone, state, district, village, specialization, availability) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
      stmt.run(id, name, phone, state, district, village, specialization, JSON.stringify(availability));
      res.json({ success: true, id });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  app.get("/api/doctors/:phone", (req, res) => {
    const doctor = db.prepare("SELECT * FROM doctors WHERE phone = ?").get(req.params.phone);
    if (doctor) {
      doctor.availability = JSON.parse(doctor.availability);
      res.json(doctor);
    } else res.status(404).json({ error: "Doctor not found" });
  });

  app.get("/api/doctors", (req, res) => {
    const doctors = db.prepare("SELECT * FROM doctors").all();
    doctors.forEach((d: any) => d.availability = JSON.parse(d.availability));
    res.json(doctors);
  });

  // Appointments
  app.post("/api/appointments", (req, res) => {
    const { id, doctorId, doctorName, specialization, patientId, patientName, patientMobile, patientEmail, patientState, patientDistrict, patientVillage, problem, date, time } = req.body;
    try {
      const stmt = db.prepare(`
        INSERT INTO appointments (id, doctorId, doctorName, specialization, patientId, patientName, patientMobile, patientEmail, patientState, patientDistrict, patientVillage, problem, date, time)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(id, doctorId, doctorName, specialization, patientId, patientName, patientMobile, patientEmail, patientState, patientDistrict, patientVillage, problem, date, time);
      res.json({ success: true });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  app.get("/api/appointments/patient/:patientId", (req, res) => {
    const appointments = db.prepare("SELECT * FROM appointments WHERE patientId = ?").all(req.params.patientId);
    res.json(appointments);
  });

  app.get("/api/appointments/doctor/:doctorId", (req, res) => {
    const appointments = db.prepare("SELECT * FROM appointments WHERE doctorId = ?").all(req.params.doctorId);
    res.json(appointments);
  });

  app.delete("/api/appointments/:id", (req, res) => {
    try {
      const stmt = db.prepare("DELETE FROM appointments WHERE id = ?");
      stmt.run(req.params.id);
      res.json({ success: true });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  // Messages (doctor <-> patient chat)
  app.post("/api/messages", (req, res) => {
    const { id, doctorId, patientId, senderType, text } = req.body;
    if (!doctorId || !patientId || !text) {
      return res.status(400).json({ error: "doctorId, patientId and text are required" });
    }
    try {
      const messageId = id || `msg-${Date.now()}`;
      const timestamp = new Date().toISOString();
      const stmt = db.prepare(
        "INSERT INTO messages (id, doctorId, patientId, senderType, text, timestamp) VALUES (?, ?, ?, ?, ?, ?)"
      );
      stmt.run(messageId, doctorId, patientId, senderType, text, timestamp);
      res.json({ id: messageId, doctorId, patientId, senderType, text, timestamp });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  app.get("/api/messages/:doctorId/:patientId", (req, res) => {
    const messages = db
      .prepare("SELECT * FROM messages WHERE doctorId = ? AND patientId = ? ORDER BY timestamp ASC")
      .all(req.params.doctorId, req.params.patientId);
    res.json(messages);
  });

  // Sahayak chatbot (Gemini-powered)
  app.post("/api/chatbot", async (req, res) => {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }
    if (!genAI) {
      return res.status(503).json({
        error: "GEMINI_API_KEY is not configured on the server. Add it to your .env file to enable Sahayak."
      });
    }
    try {
      const contents = [
        ...((history || []) as { role: string; text: string }[]).map((h) => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        })),
        { role: "user", parts: [{ text: message }] },
      ];
      const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
        config: {
          systemInstruction:
            "You are Sahayak, a friendly multilingual health assistant for a rural telehealth app called Grama Health Connect. Give simple, clear, safe general health guidance and help with using the app (booking appointments, finding doctors, emergency info). Keep replies short and easy to understand for people in rural India. Always advise seeing a real doctor for anything serious, and never give exact medicine dosages.",
        },
      });
      const reply = response.text || "Sorry, I couldn't understand that. Could you rephrase?";
      res.json({ reply });
    } catch (err: any) {
      console.error("Chatbot error:", err);
      res.status(500).json({ error: "Sahayak is temporarily unavailable. Please try again." });
    }
  });

  // --- Vite Integration ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();