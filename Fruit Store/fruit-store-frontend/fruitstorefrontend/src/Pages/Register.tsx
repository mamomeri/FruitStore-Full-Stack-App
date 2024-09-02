import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Register: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Register</h1>
        {/* Aquí va el formulario de registro */}
      </div>
      <Footer />
    </div>
  );
};

export default Register;
