import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import FruitsList from './Pages/FruitsList';
import FruitDetail from './Pages/FruitDetail';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fruits" element={<FruitsList />} />
            <Route path="/fruit/:id" element={<FruitDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
