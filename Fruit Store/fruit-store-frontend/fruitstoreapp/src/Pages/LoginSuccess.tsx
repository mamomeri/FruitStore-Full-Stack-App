import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const LoginSuccess: React.FC = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get('authToken');
    const role = cookies.get('role');

    if (token && role) {
      // Redirige al dashboard adecuado basado en el rol
      if (role === 'buyer') {
        navigate('/dashboardBuyer');
      } else if (role === 'seller') {
        navigate('/dashboardSeller');
      } else {
        navigate('/'); // Redirigir a la página de inicio si el rol no es reconocido
      }
    } else {
      // Si no hay token o rol, redirige al 404
      navigate('/404');
    }
  }, [navigate, cookies]);

  return (
    <div>
      <h1>Autenticación exitosa. Redirigiendo...</h1>
    </div>
  );
};

export default LoginSuccess;
