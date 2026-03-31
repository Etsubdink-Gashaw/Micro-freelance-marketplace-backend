import express from "express";
import { register, login } from "../controllers/authController.js";
import { Router } from "express";
const authrouter = Router();
authrouter.post("/register", register);
authrouter.post("/login", login);
authrouter.get("/register", (req, res) => {
  res.send("Use POST to register");
});
export default authrouter;