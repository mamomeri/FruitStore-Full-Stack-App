import express from 'express';
import { getAllUsersController, getUserByIdController, deleteUserController } from '../controllers/UserController.js';
import  authMiddleware  from '../middlewares/authMiddleware.js';
const router = express.Router();

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Obtiene la lista de todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', authMiddleware, getAllUsersController);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Obtiene un usuario específico por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/:id', authMiddleware, getUserByIdController);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Elimina un usuario por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.delete('/:id', authMiddleware, deleteUserController);




export default router;
