import React, { useEffect } from 'react';

const LoginRedirect: React.FC = () => {
  useEffect(() => {
    const frontendUrl = window.location.origin;
    console.log('Frontend URL:', frontendUrl);
    console.log('Backend URL:', import.meta.env.VITE_API_URL);

    const redirectUrl = `${import.meta.env.VITE_API_URL}/api/v1/auth/login?redirectUrl=${encodeURIComponent(frontendUrl)}`;
    //alert(`Redirecting to: ${redirectUrl}`);  // Muestra un alert para verificar la URL

    window.location.href = redirectUrl;
  }, []);

  return null;
};

export default LoginRedirect;
