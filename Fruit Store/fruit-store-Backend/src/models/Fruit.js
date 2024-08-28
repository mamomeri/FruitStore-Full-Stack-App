import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

class Fruit extends Model {}

Fruit.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Fruit'
});

// Relación con el modelo User
Fruit.belongsTo(User, { as: 'seller', foreignKey: 'sellerId' });
User.hasMany(Fruit, { as: 'fruits', foreignKey: 'sellerId' });

export default Fruit;
