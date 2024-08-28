import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Order from './Order.js';
import Fruit from './Fruit.js';

class OrderItem extends Model {}

OrderItem.init({
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'OrderItem'
});

// Relación con el modelo Order
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
Order.hasMany(OrderItem, { foreignKey: 'orderId' });

// Relación con el modelo Fruit
OrderItem.belongsTo(Fruit, { foreignKey: 'fruitId' });
Fruit.hasMany(OrderItem, { foreignKey: 'fruitId' });

export default OrderItem;
