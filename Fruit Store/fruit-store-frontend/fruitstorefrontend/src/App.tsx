import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div id="root">
      <Navbar />
      <div className="container">
        <h1>Welcome to Fruit Store</h1>
        {/* Otros componentes */}
      </div>
      <Footer />
    </div>
  );
};

export default App;

