const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://jo_o:aYL5KSIcOuieFj63Jxr5Ew@grotto-ermine-2472.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=require');

module.exports = sequelize;
