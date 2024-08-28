/*
  ENPOINTS

  Endpoints para frutas:

    GET /api/v1/fruits - Obtiene todas las frutas.
    POST /api/v1/fruits - Crea una nueva fruta.
    GET /api/v1/fruits/{id} - Obtiene una fruta específica por su ID.
    PUT /api/v1/fruits/{id} - Actualiza los datos de una fruta existente.
    DELETE /api/v1/fruits/{id} - Elimina una fruta por su ID.

  Endpoints para usuarios:

    GET /api/v1/users - Obtiene la lista de todos los usuarios.
    GET /api/v1/users/{id} - Obtiene un usuario específico por su ID.
    DELETE /api/v1/users/{id} - Elimina un usuario por su ID.

  Endpoints para autenticación :

    POST /api/v1/auth/register - Registra un nuevo usuario.
    POST /api/v1/auth/login - Inicia sesión y obtiene un token JWT.

*/

import express from 'express';
import path from 'path'; 
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sequelize from './config/database.js';
import cors from 'cors';
import swaggerSetup from './config/swagger.js';
import routes from './routes/index.js';
import jwt from 'jsonwebtoken'; // Importa JWT para manejar los tokens
import bcrypt from 'bcrypt'; // Importa bcrypt para manejar el hashing de contraseñas
import User from './models/User.js'; // Asegúrate de importar tu modelo de usuario
import session from 'express-session';
import cookieParser from 'cookie-parser';

// Definir __filename y __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configuración de middlewares para sesiones y cookies
app.use(cookieParser());
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Asegúrate de poner `secure: true` en producción si usas HTTPS
}));

// Middlewares para manejo de datos y rutas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configuración del motor de vistas y archivos estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'Public')));

// Configuración de rutas
app.use('/api/v1', routes);

// Ruta para la vista de login
app.get('/login', (req, res) => {
  res.render('login');
});

// Ruta para la vista de register
app.get('/register', (req, res) => {
  res.render('register');
});


// Sincroniza la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos sincronizada');
});

// Configura Swagger para la documentación de la API
swaggerSetup(app);

// Inicia el servidor en el puerto especificado en las variables de entorno
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
