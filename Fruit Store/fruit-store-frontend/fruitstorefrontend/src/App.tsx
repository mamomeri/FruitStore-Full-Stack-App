import React from 'react';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to Fruit Store</h1>
        {/* Otras partes de tu aplicación */}
      </div>
    </div>
  );
};

export default App;
