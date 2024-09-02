import { registerUser, loginUser } from '../services/userService.js'; // Asegúrate de que las rutas sean correctas
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Controlador para manejar el registro de usuarios
export const registerUserController = async (req, res, next) => {
  const { username, email, password, role } = req.body;

  try {
    // Verifica si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea el nuevo usuario
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role
    });

    // Genera un token JWT para el nuevo usuario
    const token = jwt.sign(
      { userId: newUser.id, username: newUser.username, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Responde con el token y los datos del usuario
    res.status(201).json({ token, user: { username: newUser.username, email: newUser.email, role: newUser.role } });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

export const loginUserController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Busca el usuario en la base de datos
    const user = await User.findOne({ where: { email } });

    // Si el usuario no existe verificando el email, devuelve un error
    if (!user) {
      return res.status(401).json({ message: 'Email no registrado' });
    }

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);

    // Si las contraseñas no coinciden, devuelve un error
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Crea un token JWT
    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Devuelve el token y el rol al cliente
    //res.json({ token: token, role: user.role });
    const frontendUrl = "http://localhost:5175/";
    res.redirect(`${frontendUrl}/loginSuccess?token=${token}&role=${user.role}`);

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};