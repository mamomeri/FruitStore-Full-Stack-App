import { registerUser, loginUser } from '../services/userService.js'; // Asegúrate de que las rutas sean correctas
import User from '../models/User.js';


// Controlador para obtener un usuario por su ID
export const getUserByIdController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};


// 
export const deleteUserController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await user.destroy();
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    next(error);
  }
};

// Controlador para obtener todos los usuarios
export const getAllUsersController = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};