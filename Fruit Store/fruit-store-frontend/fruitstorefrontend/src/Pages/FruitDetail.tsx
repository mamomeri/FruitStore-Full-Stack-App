import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const FruitDetail: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Fruit Detail</h1>
        {/* Aquí va el contenido específico del detalle de la fruta */}
      </div>
      <Footer />
    </div>
  );
};

export default FruitDetail;
