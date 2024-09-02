import React from 'react';
import './Styles/Footer.css'; 
const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: info@fruitstore.com</p>
            <p>Teléfono: +123 456 7890</p>
            <a href="#">Página de Contacto</a>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <a href="#" className="text-white me-2">Facebook</a>
            <a href="#" className="text-white me-2">Twitter</a>
            <a href="#" className="text-white">Instagram</a>
          </div>
          <div className="col-md-4">
            <h5>Enlaces</h5>
            <a href="#" className="text-white d-block">Sobre Nosotros</a>
            <a href="#" className="text-white d-block">Política de Privacidad</a>
            <a href="#" className="text-white d-block">Términos y Condiciones</a>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-0">© 2024 Fruit Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
