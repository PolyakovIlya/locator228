'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Seas', [
          {
              label: 'Черное море',
              latitude: 43.304694,
              longitude: 34.497070,
              radius: 300000,
              deep: 220,
              createdAt: Date.now(), updatedAt: Date.now()
          },
          {
              label: 'Азовское море',
              latitude: 46.175551,
              longitude: 36.848145,
              radius: 155000,
              deep: 120,
              createdAt: Date.now(), updatedAt: Date.now()
          }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Seas', null, {});
  }
};
