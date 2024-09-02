import  { Component } from 'react';
import DashboardTemplate from '../Components/DashboardTemplate'; // Asegúrate de que la ruta sea correcta

export default class DashboardBuyer extends Component {
  render() {
    return (
      <DashboardTemplate>
        {/* Contenido específico para DashboardBuyer */}
        <h2>Bienvenido, Comprador</h2>
        <p>Este es tu panel de control donde puedes gestionar tus compras.</p>
        {/* Aquí puedes agregar más componentes específicos del DashboardBuyer */}
      </DashboardTemplate>
    );
  }
}
