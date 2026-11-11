
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json({ limit: "10kb" }));

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to HopeNest Backend API"
  });
});

// Contact routes
app.use("/api/contacts", contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`HopeNest server running on port ${PORT}`);
  });
};

startServer();
