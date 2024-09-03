import React from 'react';
import './Styles/DashboardBuyer.css'; // Asegúrate de crear un archivo CSS con este nombre

const DashboardBuyer: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Buyer Dashboard</h1>
        <nav className="dashboard-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/orders">My Orders</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="dashboard-main">
        <section className="welcome-section">
          <h2>Welcome Back!</h2>
          <p>We're glad to see you again. Explore the latest products and deals.</p>
          <button className="explore-button">Explore Products</button>
        </section>

        <section className="stats-section">
          <div className="stats-box">
            <h3>Total Orders</h3>
            <p>15</p>
          </div>
          <div className="stats-box">
            <h3>Pending Orders</h3>
            <p>3</p>
          </div>
          <div className="stats-box">
            <h3>Favorites</h3>
            <p>7</p>
          </div>
        </section>
      </main>
      
      <footer className="dashboard-footer">
        <p>&copy; 2024 Fruit Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardBuyer;
