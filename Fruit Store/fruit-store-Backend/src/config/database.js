import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME,  // Nombre de la base de datos
  process.env.DB_USER,  // Usuario de la base de datos
  process.env.DB_PASS,  // Contraseña del usuario
  {
    host: process.env.DB_HOST,  // Host de la base de datos
    dialect: 'mysql',           // Dialecto de la base de datos que estamos usando (MySQL en este caso)
    logging: false,             // Desactivar el logging de Sequelize (opcional)
  }
);

// Función para verificar la conexión a la base de datos
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida exitosamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testConnection();  // Llamada para probar la conexión cuando se carga este archivo

export default sequelize;  // Exporta la instancia de Sequelize para ser utilizada en otros archivos
