import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Products from './Pages/Products';
import LoginRedirect from './Pages/LoginRedirect';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';
import DashboardBuyer from './Pages/DashboardBuyer';
import DashboardSeller from './Pages/DashboardSeller';
import ProtectedRoute from './Routes/ProtectedRoutes';



const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/login" element={<LoginRedirect />} />
              <Route path="/register" element={<Register />} />
              <Route element={<ProtectedRoute role="buyer" />}>
                <Route path="/dashboardBuyer" element={<DashboardBuyer />} />
              </Route>
              <Route element={<ProtectedRoute role="seller" />}>
                <Route path="/dashboardSeller" element={<DashboardSeller />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>

        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
