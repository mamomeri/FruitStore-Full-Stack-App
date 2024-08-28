import express from 'express';
import fruitRoutes from './fruitRoutes.js';
import userRoutes from './userRoutes.js';
import authRouter from './authRoutes.js'

const router = express.Router();

// Rutas para frutas
router.use('/fruits', fruitRoutes);

// Rutas para usuarios
router.use('/users', userRoutes);

// Rutas para autenticacion
router.use('/auth', authRouter);

export default router;
