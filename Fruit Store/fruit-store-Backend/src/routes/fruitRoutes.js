import express from 'express';
import { getAllFruitsController, getFruitByIdController, createFruitController, updateFruitController, deleteFruitController } from '../controllers/fruitController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

/**
 * @swagger
 * /api/v1/fruits:
 *   get:
 *     summary: Obtiene todas las frutas
 *     responses:
 *       200:
 *         description: Lista de frutas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', getAllFruitsController);

/**
 * @swagger
 * /api/v1/fruits/{id}:
 *   get:
 *     summary: Obtiene una fruta específica por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la fruta
 *     responses:
 *       200:
 *         description: Fruta obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/:id', getFruitByIdController);

/**
 * @swagger
 * /api/v1/fruits:
 *   post:
 *     summary: Crea una nueva fruta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Fruta creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/', authMiddleware, createFruitController);

/**
 * @swagger
 * /api/v1/fruits/{id}:
 *   put:
 *     summary: Actualiza los datos de una fruta existente
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la fruta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Fruta actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.put('/:id', authMiddleware, updateFruitController);

/**
 * @swagger
 * /api/v1/fruits/{id}:
 *   delete:
 *     summary: Elimina una fruta por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la fruta
 *     responses:
 *       200:
 *         description: Fruta eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.delete('/:id', authMiddleware, deleteFruitController);

export default router;
