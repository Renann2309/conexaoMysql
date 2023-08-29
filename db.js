const Sequelize = require('sequelize');

const sequelize = new Sequelize("db_produto", "root", "081175", {
    host: 'localhost',
    dialect: 'mysql'
});



sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados com Sucesso!")

}).catch(function(){
    console.log("Erro de Conexão com o banco de dados!")
});

module.exports = sequelize;
