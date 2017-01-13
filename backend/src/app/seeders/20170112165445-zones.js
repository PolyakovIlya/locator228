'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Zones', [
          { label: "user1", latitude: 46.342869, longitude: 30.644989, radius: 1000, fish: [
              {
                  name: 'Бычок',
                  count: 50
              },
              {
                  name: 'Beluga',
                  count: 70
              }
          ], createdAt: Date.now(), updatedAt: Date.now() },
          { label: "Днепр-Черкасы", latitude: 49.299046, longitude: 32.618408, radius: 37111, fish: [
              {
                  name: 'Бычок',
                  count: 50
              },
              {
                  name: 'Beluga',
                  count: 70
              }
          ], createdAt: Date.now(), updatedAt: Date.now() },
          { label: "Днепр-Киев", latitude: 49.991629, longitude: 31.333008, radius: 27111, fish: [
              {
                  name: 'Бычок',
                  count: 50
              },
              {
                  name: 'Beluga',
                  count: 70
              }
          ], createdAt: Date.now(), updatedAt: Date.now() },
          { label: "Днепр-Припять", latitude: 50.977237, longitude: 30.498047, radius: 33111, fish: [
              {
                  name: 'Бычок',
                  count: 50
              },
              {
                  name: 'Beluga',
                  count: 70
              }
          ], createdAt: Date.now(), updatedAt: Date.now() },
          { label: "Днепр-Никополь", latitude: 47.500271, longitude: 34.178467, radius: 19111, fish: [
              {
                  name: 'Бычок',
                  count: 50
              },
              {
                  name: 'Beluga',
                  count: 70
              }
          ], createdAt: Date.now(), updatedAt: Date.now() },
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Zones', null, {});
  }
};
