import express from "express";

import { createGig } from "../controllers/gig.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
const gigrouter = express.Router();
gigrouter.post("/", authMiddleware, createGig);

export default gigrouter;