const{ Model, DataTypes } = require('sequelize');

class Farm extends Model {
    static init(sequelizeConnection) {
        super.init({
            code: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: DataTypes.STRING,
        }, {
            sequelize: sequelizeConnection,
        })
    }
}

module.exports = Farm;