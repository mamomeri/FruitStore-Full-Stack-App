import React from 'react';
import './Styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <h5>Contacto</h5>
          <p>Email: info@fruitstore.com</p>
          <p>Teléfono: +123 456 7890</p>
          <a href="/contacto">Página de Contacto</a>
        </div>
        <div>
          <h5>Síguenos</h5>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div>
          <h5>Enlaces</h5>
          <ul>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/privacy">Política de Privacidad</a></li>
            <li><a href="/terms">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>
      <div>
        <p>&copy; 2024 Fruit Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
