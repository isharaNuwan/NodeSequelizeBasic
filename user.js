
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        iduser: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    }, {
        tableName: 'user'
    });
};