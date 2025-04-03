import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import bodyParser from "body-parser";

dotenv.config();
console.log("🔹 PORT:", process.env.PORT);
console.log("🔹 MONGO_URI:", process.env.MONGO_URI);


const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// Middleware
// app.use(cors());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};
connectDB();

// Define Schema & Model
const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  service: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// 🟢 API Route: Book Appointment
app.post("/book-appointment", async (req, res) => {
  console.log("Incoming Request:", req.body);
  try {
    const { name, email, phone, date, time, service } = req.body;

    // Check if an appointment already exists for the given email
    const existingAppointment = await Appointment.findOne({ email, date, time });

    if (existingAppointment) {
      return res.status(400).json({ message: "❌ You already have an appointment on this date!" });
    }

    // Create new appointment
    const newAppointment = new Appointment({ name, email, phone, date, time, service });
    await newAppointment.save();

    res.status(201).json({ message: "✅ Appointment booked successfully!" });
  } catch (error) {
    res.status(500).json({ message: "❌ Server Error", error: error.message });
  }
});

// 🟢 API Route: Get All Appointments
app.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "❌ Server Error", error: error.message });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
