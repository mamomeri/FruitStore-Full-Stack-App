import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const setTokenCookie = (res, token) => {
  res.setHeader('Set-Cookie', cookie.serialize('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Asegúrate de que esto sea 'true' en producción
    maxAge: 3600, // 1 hora
    sameSite: 'strict',
    path: '/',
  }));
};

export const registerUserController = async (req, res, next) => {
  const { username, email, password, role } = req.body;
  const redirectUrl = req.body.redirectUrl || 'http://localhost:5173'; // Valor por defecto

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Asegúrate de incluir la lógica de hasheo
    const newUser = await User.create({ username, email, password: hashedPassword, role });

    const token = jwt.sign(
      { userId: newUser.id, username: newUser.username, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Establece la cookie con el token
    setTokenCookie(res, token);

    // Redirige al frontend después de registrar
    res.redirect(`${redirectUrl}/loginSuccess`);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

export const loginUserController = async (req, res, next) => {
  const { email, password } = req.body;
  const redirectUrl = req.body.redirectUrl || 'http://localhost:5173'; // Valor por defecto

  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Establece la cookie con el token
    setTokenCookie(res, token);

    // Redirige al frontend después de iniciar sesión
    res.redirect(`${redirectUrl}/loginSuccess`);
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};
