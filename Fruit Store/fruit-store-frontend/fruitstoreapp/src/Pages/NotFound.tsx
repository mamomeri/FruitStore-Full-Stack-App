import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content text-center">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
