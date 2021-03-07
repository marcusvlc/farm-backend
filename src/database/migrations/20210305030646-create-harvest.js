'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.createTable('harvests', { 
       code: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: false,
         allowNull: false
       },
       start_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      mill_code: {
        type: Sequelize.INTEGER ,
        allowNull: false,
        references: { model:  'mills', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
       },
      ended_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('harvests');
  }
};
