import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // El token se espera en el encabezado "Authorization: Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. No hay token proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token usando la clave secreta
    req.user = decoded; // Almacena los datos del usuario decodificados en la solicitud
    next(); // Pasa al siguiente middleware o controlador
  } catch (err) {
    res.status(400).json({ message: 'Token inválido.' });
  }
};

export default authMiddleware;
