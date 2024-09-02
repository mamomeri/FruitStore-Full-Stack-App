import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoginSuccess: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    const role = query.get('role');

    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('role', role || '');

      if (role === 'buyer') {
        window.location.href = '/dashboardBuyer';
      } else if (role === 'seller') {
        window.location.href = '/dashboardSeller';
      } else {
        console.error('Rol no reconocido:', role);
      }
    }
  }, [location]);

  return <p>Redirigiendo...</p>;
};

export default LoginSuccess;
