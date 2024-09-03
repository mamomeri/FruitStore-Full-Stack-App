import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
          email: 'buyer1@example.com', // Reemplaza con los datos del formulario de login
          password: 'encryptedpassword3',
        });
        
        const { token, role } = response.data;
        alert(role);
        // Guarda el token y el rol en el localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        // Redirige al dashboard adecuado basado en el rol
        if (role === 'buyer') {
          navigate('/dashboardBuyer');
        } else if (role === 'seller') {
          navigate('/dashboardSeller');
        } else {
          navigate('/'); // Redirigir a la página de inicio si el rol no es reconocido
        }
      } catch (error) {
        console.error('Error durante el login:', error);
        navigate('/404'); // Redirige al 404 en caso de error
      }
    };

    loginUser();
  }, [navigate]);

  return (
    <div>
      <h1>Autenticación en proceso...</h1>
    </div>
  );
};

export default LoginRedirect;
