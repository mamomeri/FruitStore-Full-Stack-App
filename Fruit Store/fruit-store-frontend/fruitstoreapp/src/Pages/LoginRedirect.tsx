import React, { useEffect } from 'react';


const LoginRedirect: React.FC = () => {
  useEffect(() => {
    // Redirige al backend para el login
    window.location.href = `${import.meta.env.VITE_API_URL}/api/v1/auth/login`;
  }, []);

  return null; // No renderiza nada, solo redirige
};

export default LoginRedirect;

