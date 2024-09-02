import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Register.css';
import axios from 'axios';

const Register: React.FC = () => {
  const [backendResponse, setBackendResponse] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('URL_DE_TU_BACKEND_AQUI')
      .then(response => {
        setBackendResponse(response.data.message); // Ajusta según tu respuesta
      })
      .catch(error => {
        console.error('Error al llamar al backend:', error);

        // Si es un 404 o cualquier otro error
        if (error.response && error.response.status === 404) {
          navigate('/404'); // Redirigir a la página 404
        } else {
          setError(true); // Mostrar un mensaje de error
        }
      });
  }, [navigate]);

  if (error) {
    return (
      <div className="register-container">
        <h1>Error</h1>
        <p>No se pudo obtener la información. Inténtalo de nuevo más tarde.</p>
      </div>
    );
  }

  return (
    <div className="register-container">
      <h1>Register</h1>
      <p>Formulario de registro.</p>
      <p>{backendResponse}</p>
    </div>
  );
};

export default Register;
