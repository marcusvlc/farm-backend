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

    static associate(models) {
        this.belongsTo(models.Harvest, { foreignKey: 'harvest_code'})
    }
}

module.exports = Farm;