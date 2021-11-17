'use strict';
module.exports = {
    /**
* 
* @param {import('sequelize').QueryInterface} queryInterface 
* @param {import('sequelize').DataTypes} Sequelize 
*/ 

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2)
      },
      urlImage: {
        allowNull: false,
        field: 'url_image',
        default: '',
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
