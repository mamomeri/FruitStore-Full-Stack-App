import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSuccess: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: localStorage.getItem('email'), // Suponiendo que guardas el email temporalmente
            password: localStorage.getItem('password') // Suponiendo que guardas el password temporalmente
          })
        });

        const data = await response.json();
        const { token, role } = data;

        if (token && role) {
          // Guarda el token y rol en localStorage
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);

          // Redirige basado en el rol
          if (role === 'buyer') {
            navigate('/dashboardBuyer');
          } else if (role === 'seller') {
            navigate('/dashboardSeller');
          } else {
            navigate('/'); // Redirigir a la página de inicio si el rol no es reconocido
          }
        } else {
          alert('Token o rol faltantes, redirigiendo al 404');
          navigate('/404');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        navigate('/404');
      }
    };

    loginUser();
  }, [navigate]);

  return (
    <div>
      <h1>Autenticación exitosa. Redirigiendo...</h1>
    </div>
  );
};

export default LoginSuccess;
