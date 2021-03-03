'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('harvests', 'mill_id', {
          type: Sequelize.INTEGER ,
          allowNull: false,
          references: { model:  'mills', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('harvests', 'mill_id', { transaction: t }),
      ]);
    });
  }
};
