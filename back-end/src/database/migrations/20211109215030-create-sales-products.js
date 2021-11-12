'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: 1,
        references: {
          model: 'sales',
          key: 'id',
        }
      },
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        defaultValue: 1,
        references: {
          model: 'products',
          key: 'id',
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};
