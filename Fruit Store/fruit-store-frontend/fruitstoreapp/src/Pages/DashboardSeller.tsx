import React from 'react';
import './Styles/DashboardSeller.css'; // Asegúrate de crear un archivo CSS con este nombre

const DashboardSeller: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Seller Dashboard</h1>
        <nav className="dashboard-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">My Products</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="dashboard-main">
        <section className="welcome-section">
          <h2>Welcome Back, Seller!</h2>
          <p>Manage your products, track orders, and view analytics.</p>
          <button className="manage-button">Manage Products</button>
        </section>

        <section className="stats-section">
          <div className="stats-box">
            <h3>Total Sales</h3>
            <p>$2,300</p>
          </div>
          <div className="stats-box">
            <h3>Pending Orders</h3>
            <p>5</p>
          </div>
          <div className="stats-box">
            <h3>Products Listed</h3>
            <p>25</p>
          </div>
        </section>
      </main>
      
      <footer className="dashboard-footer">
        <p>&copy; 2024 Fruit Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardSeller;
