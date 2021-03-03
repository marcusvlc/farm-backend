'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('farms', 'harvest_code', {
          type: Sequelize.INTEGER ,
          allowNull: false,
          references: { model:  'harvests', key: 'code' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('farms', 'harvest_code', { transaction: t }),
      ]);
    });
  }
};
