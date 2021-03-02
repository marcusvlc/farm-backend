const{ Model, DataTypes } = require('sequelize');

class Field extends Model {
    static init(sequelizeConnection) {
        super.init({
            code: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING
        }, {
            sequelize: sequelizeConnection,
        })
    }
}

module.exports = Field;