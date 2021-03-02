'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.createTable('fields', { 
       code: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: false,
         allowNull: false
       },
       latitude: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       longitude: {
        type: Sequelize.STRING,
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
     return queryInterface.dropTable('fields');
  }
};
