import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

class Order extends Model {}

Order.init({
  totalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Order'
});

// Relación con el modelo User (comprador)
Order.belongsTo(User, { as: 'buyer', foreignKey: 'buyerId' });
User.hasMany(Order, { as: 'orders', foreignKey: 'buyerId' });

export default Order;
