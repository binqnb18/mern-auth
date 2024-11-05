import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

// Sử dụng phương thức POST cho route /signup
router.post("/signup", signup);

export default router;
