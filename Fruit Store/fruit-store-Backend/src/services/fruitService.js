import Fruit from '../models/Fruit.js';
import User from '../models/User.js';

export const getAllFruits = async () => {
  try {
    const fruits = await Fruit.findAll({
      include: [{ model: User, as: 'seller', attributes: ['username', 'email'] }]
    });
    return fruits;
  } catch (error) {
    throw new Error('Error al obtener las frutas');
  }
};

export const getFruitById = async (id) => {
  try {
    const fruit = await Fruit.findByPk(id, {
      include: [{ model: User, as: 'seller', attributes: ['username', 'email'] }]
    });
    if (!fruit) {
      throw new Error('Fruta no encontrada');
    }
    return fruit;
  } catch (error) {
    throw new Error('Error al obtener la fruta');
  }
};

export const createFruit = async (name, price, quantity, sellerId) => {
  try {
    const newFruit = await Fruit.create({
      name,
      price,
      quantity,
      sellerId
    });
    return newFruit;
  } catch (error) {
    throw new Error('Error al crear la fruta');
  }
};

export const updateFruit = async (id, updatedData) => {
  try {
    const fruit = await Fruit.findByPk(id);
    if (!fruit) {
      throw new Error('Fruta no encontrada');
    }

    const updatedFruit = await fruit.update(updatedData);
    return updatedFruit;
  } catch (error) {
    throw new Error('Error al actualizar la fruta');
  }
};

export const deleteFruit = async (id) => {
  try {
    const fruit = await Fruit.findByPk(id);
    if (!fruit) {
      throw new Error('Fruta no encontrada');
    }

    await fruit.destroy();
    return true;
  } catch (error) {
    throw new Error('Error al eliminar la fruta');
  }
};
