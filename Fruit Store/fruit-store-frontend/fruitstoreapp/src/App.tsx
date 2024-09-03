import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
