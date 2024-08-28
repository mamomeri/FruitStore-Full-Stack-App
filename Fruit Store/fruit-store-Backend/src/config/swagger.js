import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import packageJson from '../../package.json' assert { type: 'json' }; // Ajusta la ruta según corresponda

const { version } = packageJson; // Desestructura la versión del objeto importado

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Store Fruit API',
      version,
      description: 'API de gestión para la tienda de frutas',
      contact: {
        name: 'Marcos Alejandro Moreira',
        url: 'https://tu-sitio-web.com',
        email: 'tu-email@ejemplo.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local'
      }
    ],
  },
  apis: ['./src/routes/*.js'],  // Ruta a los archivos que contienen anotaciones de Swagger
};

const swaggerSpec = swaggerJSDoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger UI disponible en http://localhost:3000/api-docs`);
};
