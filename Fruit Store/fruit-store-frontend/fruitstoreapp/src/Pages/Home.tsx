import React from 'react';
import FruitCard from '../Components/FruitCard';
import './Styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center hero-title">Bienvenido a Fruit Store</h1>
      <p className="text-center">¡Tu tienda de confianza para las frutas más frescas!</p>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U4vyPb65X30"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-center mt-5">
        <h2>¿Por qué elegirnos?</h2>
        <p>En Fruit Store, te ofrecemos la mejor selección de frutas de todo el mundo. Estamos comprometidos a brindarte productos frescos y de alta calidad al mejor precio.</p>
      </div>

      <div className="d-flex justify-content-center mt-4 flex-wrap">
        <FruitCard imgSrc="/Productos/banana.png" altText="Banana" />
        <FruitCard imgSrc="/Productos/coco.png" altText="Coco" />
        <FruitCard imgSrc="/Productos/guanábana.png" altText="Guanábana" />
        <FruitCard imgSrc="/Productos/kiwi.png" altText="Kiwi" />
        <FruitCard imgSrc="/Productos/manzana.png" altText="Manzana" />
        <FruitCard imgSrc="/Productos/sandía.png" altText="Sandía" />
        <FruitCard imgSrc="/Productos/uvas.png" altText="Uvas" />
      </div>
    </div>
  );
};

export default Home;
