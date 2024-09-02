import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const NotFound: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>404 - Page Not Found</h1>
        {/* Aquí puedes agregar más contenido o enlaces de navegación */}
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
