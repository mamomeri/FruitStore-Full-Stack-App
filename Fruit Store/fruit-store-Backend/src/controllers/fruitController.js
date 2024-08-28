import { getAllFruits, getFruitById, createFruit, updateFruit, deleteFruit } from '../services/fruitService.js';

export const getAllFruitsController = async (req, res, next) => {
  try {
    const fruits = await getAllFruits();
    res.status(200).json(fruits);
  } catch (error) {
    next(error);
  }
};

export const getFruitByIdController = async (req, res, next) => {
  try {
    const fruit = await getFruitById(req.params.id);
    res.status(200).json(fruit);
  } catch (error) {
    next(error);
  }
};

export const createFruitController = async (req, res, next) => {
  try {
    const { name, price, quantity } = req.body;
    const sellerId = req.user.id;

    const newFruit = await createFruit(name, price, quantity, sellerId);
    res.status(201).json(newFruit);
  } catch (error) {
    next(error);
  }
};

export const updateFruitController = async (req, res, next) => {
  try {
    const updatedData = req.body;
    const fruit = await updateFruit(req.params.id, updatedData);
    res.status(200).json(fruit);
  } catch (error) {
    next(error);
  }
};

export const deleteFruitController = async (req, res, next) => {
  try {
    await deleteFruit(req.params.id);
    res.status(200).json({ message: 'Fruta eliminada exitosamente' });
  } catch (error) {
    next(error);
  }
};
