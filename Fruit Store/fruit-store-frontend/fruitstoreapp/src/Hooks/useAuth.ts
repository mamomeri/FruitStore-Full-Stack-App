import { useState, useEffect } from 'react';

interface User {
  username: string;
  token: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const userData = { username: data.username, token: data.token };
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      } else {
        console.error('Login failed');
        // Manejo de errores según sea necesario
      }
    } catch (error) {
      console.error('Error en la autenticación', error);
    }
  };

  const register = async (username: string, password: string, email: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        const data = await response.json();
        const userData = { username: data.username, token: data.token };
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      } else {
        console.error('Registration failed');
        // Manejo de errores según sea necesario
      }
    } catch (error) {
      console.error('Error en el registro', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    register,
  };
};
