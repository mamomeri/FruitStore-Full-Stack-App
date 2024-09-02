import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const FruitsList: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Fruits List</h1>
        {/* Aquí va el contenido de la lista de frutas */}
      </div>
      <Footer />
    </div>
  );
};

export default FruitsList;
