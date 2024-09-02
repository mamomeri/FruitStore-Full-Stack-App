import React, { useEffect } from 'react';

const Login: React.FC = () => {
  useEffect(() => {
    // Procesa la respuesta del backend después del login
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
      method: 'POST', // o 'GET' dependiendo de cómo esté configurado tu backend
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          // Almacena el token y el rol en localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);

          // Redirige basado en el rol del usuario
          if (data.role === 'buyer') {
            window.location.href = '/dashboardBuyer';
          } else if (data.role === 'seller') {
            window.location.href = '/dashboardSeller';
          } else {
            console.error('Rol no reconocido:', data.role);
          }
        } else {
          console.error('Error: Token no encontrado en la respuesta.');
        }
      })
      .catch(error => console.error('Error durante el login:', error));
  }, []);

  return <p>Autenticando...</p>; // Muestra un mensaje mientras se procesa la autenticación
};

export default Login;
