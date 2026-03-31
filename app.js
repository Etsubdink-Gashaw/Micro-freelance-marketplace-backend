import express from "express";
import authrouter from "./src/routes/authRoutes.js";
const app = express();
app.use(express.json());
app.use("/auth", authrouter);
app.get("/health", (req, res) => res.send("Server is running"));

export default app;