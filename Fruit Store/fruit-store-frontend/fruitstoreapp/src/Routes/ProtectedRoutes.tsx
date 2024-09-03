import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  role: string;
}

const ProtectedRoute = ({ role }: ProtectedRouteProps) => {
  const token = localStorage.getItem('token');
  const storedRole = localStorage.getItem('role');

  if (!token || storedRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
