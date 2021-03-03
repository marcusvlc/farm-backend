const{ Model, DataTypes } = require('sequelize');

class Harvest extends Model {
    static init(sequelizeConnection) {
        super.init({
            code: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            start_at: DataTypes.DATE,
            ended_at: DataTypes.DATE,
        }, {
            sequelize: sequelizeConnection,
        })
    }
}

module.exports = Harvest;