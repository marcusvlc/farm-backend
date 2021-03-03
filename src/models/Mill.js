const{ Model, DataTypes } = require('sequelize');

class Mill extends Model {
    static init(sequelizeConnection) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
        }, {
            sequelize: sequelizeConnection,
        })
    }
}

module.exports = Mill;