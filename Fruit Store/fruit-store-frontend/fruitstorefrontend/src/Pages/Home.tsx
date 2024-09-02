import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome to Fruit Store</h1>
        {/* Aquí va el contenido de la página de inicio */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
