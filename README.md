# Node.js
function legal

 const Sequelize = require('sequelize'); 
 const Sequelize = require('sequelize');

  dialect: 'sqlite',
  storage: './database.sqlite'
  })

  module.exports = sequelize;

const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('produto' {

id: {

type : Sequelize.INTEGER,
autoIncreament: true,
allowNull: false,
primaryKey:true
},

nome: {
    type: Sequelize, STRING,
    allowNull: false
},

preco: {
type: Sequelize.DOUBlE
},
descricao: Sequelize.STRING
}) 

module.exports = Produto;






}