
const Sequelize = require('sequelize');
const path = require('path');

const connection = new Sequelize('Test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false,
    define: {
        timestamps: false
    }

});

const user = connection.import(path.join(__dirname, './user'));

connection.sync();

module.exports = {
    user: user
};

