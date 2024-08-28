const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Imprime el stack trace del error en la consola para fines de depuración
    
    res.status(err.status || 500).json({
      message: err.message || 'Error interno del servidor',
      stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Muestra el stack trace solo si no estamos en producción
    });
  };
  
  export default errorHandler;
  