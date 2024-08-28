import cors from 'cors';

const allowedOrigins = [
  'http://localhost:3000',  // Permite el acceso desde el frontend en desarrollo
  'https://your-production-domain.com'  // Permite el acceso desde el dominio de producción
];

const corsOptions = {
  origin: (origin, callback) => {
    // Permite las solicitudes que no tienen origen (como las de Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,  // Permite el uso de cookies y credenciales en las solicitudes
  optionsSuccessStatus: 200  // Algunas versiones antiguas de navegadores fallan con 204
};

export default cors(corsOptions);
