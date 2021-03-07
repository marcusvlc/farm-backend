const{ Model, DataTypes } = require('sequelize');

class Field extends Model {
    static init(sequelizeConnection) {
        super.init({
            code: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING
        }, {
            sequelize: sequelizeConnection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Farm, { foreignKey: 'farm_code'})
    }
    
}

module.exports = Field;