const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vaga = sequelize.define('Vaga', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salario: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
}, {
  timestamps: true,
});

module.exports = Vaga;
