import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import LoginRedirect from '../Pages/LoginRedirect';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound';
import DashboardBuyer from '../Pages/DashboardBuyer';
import DashboardSeller from '../Pages/DashboardSeller';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRedirect />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboardBuyer" element={<DashboardBuyer />} />
      <Route path="/dashboardSeller" element={<DashboardSeller />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
