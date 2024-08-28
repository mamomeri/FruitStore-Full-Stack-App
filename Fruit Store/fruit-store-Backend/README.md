# Store Fruit Backend
Usar un MARKDOWN VIEWER en el navegador*
## 1. Sobre el Proyecto

El proyecto **Store Fruit Backend** es un sistema backend desarrollado para manejar la gestión de una tienda de frutas. Este backend proporciona una API que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos (frutas) y gestionar usuarios con autenticación mediante JSON Web Tokens (JWT). El objetivo principal es ofrecer una solución robusta y segura para manejar los datos de la tienda, incluyendo la autenticación y la protección de rutas, y servir como base para un frontend que consuma estos datos.

## 2. Tecnologías Utilizadas

El backend de **Store Fruit** se ha desarrollado utilizando las siguientes tecnologías:

- **Express**: Un framework web para Node.js que simplifica la creación de APIs y servidores web.
- **Sequelize**: Un ORM (Object-Relational Mapping) que permite interactuar con bases de datos SQL de manera sencilla y abstracta.
- **MySQL2**: Un conector para MySQL en Node.js, necesario para que Sequelize funcione con MySQL.
- **bcryptjs**: Para encriptar las contraseñas de los usuarios antes de almacenarlas en la base de datos.
- **jsonwebtoken**: Para manejar la autenticación basada en tokens JWT, permitiendo proteger rutas y recursos.
- **dotenv**: Para manejar variables de entorno, permitiendo configurar datos sensibles como credenciales de la base de datos.
- **express-validator**: Para validar y sanitizar los datos enviados en las solicitudes HTTP.
- **Nodemon**: Una herramienta que reinicia automáticamente el servidor cuando se detectan cambios en el código durante el desarrollo.
- **CORS**: Configurado para permitir que el frontend pueda realizar solicitudes al backend desde un dominio diferente.

## 3. Rutas y Endpoints

Las rutas principales del API están organizadas de la siguiente manera:

- **Autenticación:**
  - `POST /auth/register` - Registrar un nuevo usuario.
  - `POST /auth/login` - Iniciar sesión y obtener un token JWT.

- **Frutas:**
  - `GET /fruits` - Obtener la lista de todas las frutas.
  - `GET /fruits/:id` - Obtener una fruta específica por su ID.
  - `POST /fruits` - Crear una nueva fruta.
  - `PUT /fruits/:id` - Actualizar los datos de una fruta existente.
  - `DELETE /fruits/:id` - Eliminar una fruta por su ID.

- **Usuarios:**
  - `GET /users` - Obtener la lista de todos los usuarios (protegido).
  - `GET /users/:id` - Obtener un usuario específico por su ID (protegido).
  - `DELETE /users/:id` - Eliminar un usuario por su ID (protegido).

**Nota:** Las rutas marcadas como "protegido" requieren un token JWT válido.

## 4. Estructura del Proyecto y Rol de Cada Carpeta

La estructura del proyecto sigue una organización modular que facilita el mantenimiento y la escalabilidad:

- **`src/`**: Carpeta principal que contiene todo el código fuente.
  - **`config/`**: Contiene archivos de configuración global, como la conexión a la base de datos.
  - **`controllers/`**: Contiene los controladores que manejan la lógica de negocio para cada ruta. Aquí se procesan las solicitudes y se interactúa con los modelos.
  - **`middlewares/`**: Funciones middleware que se ejecutan antes de las respuestas finales, como la validación de JWT o la validación de datos de entrada.
  - **`models/`**: Define los modelos Sequelize que representan las tablas de la base de datos. Aquí se configuran los esquemas de datos.
  - **`routes/`**: Define las rutas de la API y los controladores asociados a cada una.
  - **`sequelize/`**: Configuración específica de Sequelize, incluyendo la inicialización de la conexión a la base de datos.
  - **`services/`**: Servicios compartidos entre diferentes partes de la aplicación, como la lógica de negocio compleja o integraciones con APIs externas.
  - **`utils/`**: Funciones utilitarias y herramientas auxiliares que se utilizan en diferentes partes de la aplicación.
  - **`views/`**: Contiene las plantillas EJS si se utilizan para generar vistas en el servidor (aunque no se usa en este proyecto).
  - **`public/`**: Archivos estáticos como imágenes, CSS y JS si se utilizan (aunque en este proyecto se gestionan en el frontend).



## 5. Pasos Previos de Configuración y Rol de Cada Archivo de Configuración

### Pasos Previos de Configuración

1. **Clonar el Repositorio:**
   Para obtener una copia local del proyecto, clona el repositorio usando Git:
  
   `git clone <URL-del-repositorio>`
   `cd fruit-store-Backend`

2. **Instalar Dependencias: Instala todas las dependencias necesarias utilizando npm:**


`npm install`

3. **Configurar Variables de Entorno: Crea un archivo .env en la raíz del proyecto. Este archivo debe contener las configuraciones sensibles, como las credenciales de la base de datos y la clave secreta para JWT:**
`DB_HOST=localhost 
DB_USER=root
DB_PASS=tu_contraseña
DB_NAME=fruit_store
JWT_SECRET=supersecretkey
PORT=3000`
### Rol de Cada Archivo de Configuración

**`.env:`** Almacena las variables de entorno que configuran la conexión a la base de datos, el puerto del servidor, y otros datos sensibles. Este archivo permite mantener las configuraciones separadas del código fuente, facilitando la adaptación del proyecto a diferentes entornos (desarrollo, producción, etc.).

**`src/config/database.js:`** Contiene la configuración de Sequelize para conectar y sincronizar la base de datos MySQL. Este archivo se encarga de establecer la conexión utilizando las variables de entorno definidas en .env.

**`src/config/cors.js:`** Si decides configurar CORS, este archivo se utilizará para definir qué dominios pueden acceder a la API. Esto es crucial cuando el frontend y el backend están en dominios o puertos diferentes.

**`src/index.js:`** Este es el archivo de entrada principal del servidor Express. Aquí se configuran las rutas, middlewares globales y se inicializa el servidor. También es donde se configura la sincronización con la base de datos.
### Iniciar el Servidor
Para iniciar el servidor en modo de desarrollo con reinicio automático al detectar cambios:
`npm run dev`
Para iniciar el servidor en modo de producción:
`npm start`
 ## 6. Documentación con Swagger

Para facilitar la documentación y el uso de la API, se ha integrado Swagger en el proyecto. Swagger permite visualizar y probar los endpoints de la API directamente desde el navegador.
Configuración de Swagger

**Instalar dependencias necesarias: Para integrar Swagger en tu proyecto, instala las siguientes dependencias:**

   

`npm install swagger-jsdoc swagger-ui-express`


Acceder a la Documentación: Una vez que Swagger esté configurado, puedes acceder a la documentación de la API en:


`http://localhost:3000/api-docs`



 ## 7. Árbol de archivos del proyecto

```
fruit-store-Backend/
│
├── node_modules/                # Dependencias de Node.js
├── src/                         # Carpeta principal del código fuente
│   ├── config/                  # Configuraciones globales
│   │   └── database.js          # Configuración de la base de datos (Sequelize)
│   │   └── cors.js              # Configuración de CORS (si es necesario)
│   │   └── swagger.js           # Configuración de Swagger
│   │
│   ├── controllers/             # Controladores de la aplicación
│   │   └── fruitController.js   # Controlador para las frutas
│   │   └── userController.js    # Controlador para los usuarios
│   │
│   ├── middlewares/             # Middlewares personalizados
│   │   └── authMiddleware.js    # Middleware de autenticación JWT
│   │   └── errorHandler.js      # Middleware de manejo de errores
│   │
│   ├── models/                  # Modelos de Sequelize
│   │   └── Fruit.js             # Modelo para la tabla de frutas
│   │   └── User.js              # Modelo para la tabla de usuarios
│   │   └── Order.js             # Modelo para la tabla de Órdenes
│   │   └── OrderItem.js         # Modelo para la tabla de las especificaciones de las órdenes
│   │   └── db.sql               # querys para la creación y llenado de la base de datos
│   │
│   ├── Public/                  # Archivos públicos (si decides usarlos)
│   │   └── images/              # Carpeta para almacenar imágenes estáticas
│   │
│   ├── routes/                  # Definición de las rutas de la API
│   │   └── fruitRoutes.js       # Rutas relacionadas con las frutas
│   │   └── userRoutes.js        # Rutas relacionadas con los usuarios
│   │   └── index.js             # Archivo de entrada que combina todas las rutas
│   │
│   ├── sequelize/               # Configuración específica de Sequelize
│   │   └── seeders/             # Semillas para la base de datos (si las usas)
│   │   └── migrations/          # Migraciones de la base de datos (si las usas)
│   │
│   ├── services/                # Servicios de negocio y lógicos
│   │   └── fruitService.js      # Lógica de negocio relacionada con frutas
│   │   └── userService.js       # Lógica de negocio relacionada con usuarios
│   │
│   ├── utils/                   # Utilidades y funciones auxiliares
│   │   └── logger.js            # Logger personalizado
│   │   └── helperFunctions.js   # Funciones utilitarias
│   │
│   ├── views/                   # Plantillas EJS o HTML (si las usas)
│   │   └── index.ejs            # Ejemplo de vista EJS
│   │
│   └── index.js                 # Archivo principal para iniciar la aplicación
│
├── .env                         # Archivo de configuración de variables de entorno
├── .gitignore                   # Archivos y carpetas a ignorar en git
├── package-lock.json            # Archivo de bloqueo de versiones de npm
├── package.json                 # Configuración del proyecto y dependencias
└── README.md                    # Documentación del proyecto
```