import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Login: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Login</h1>
        {/* Aquí va el formulario de inicio de sesión */}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
