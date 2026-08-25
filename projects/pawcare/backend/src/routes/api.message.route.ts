import { Router } from "express";
import { message } from "../controllers/api.message.controller.js";
const router = Router();

router.get("/message", message);

export default router;
