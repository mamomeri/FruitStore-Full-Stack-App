import React from 'react';
import './Styles/Login.css';
const Login: React.FC = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Formulario de inicio de sesión.</p>

      FRAGMENTO DE CODIGO RETORNADO POR EL BACK CON EL ENPOINT 
       POST /api/v1/auth/register - Registra un nuevo usuario.
    POST /api/v1/auth/login - Inicia sesión y obtiene un token JWT.


    </div>
  );
};

export default Login;
