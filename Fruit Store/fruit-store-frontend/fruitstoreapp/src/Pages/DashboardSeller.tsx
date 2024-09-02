import  { Component } from 'react';
import DashboardTemplate from '../Components/DashboardTemplate'; // Asegúrate de que la ruta sea correcta

export default class DashboardSeller extends Component {
  render() {
    return (
      <DashboardTemplate>
        {/* Contenido específico  */}
        <h2>Bienvenido, Vendedor</h2>
        <p>Este es tu panel de control donde puedes gestionar tus ventas.</p>
        {/* Aquí puedes agregar más componentes específicos  */}
      </DashboardTemplate>
    );
  }
}
