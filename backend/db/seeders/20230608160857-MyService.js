'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'MyServices',
      [
        {
          seller_id: 2,
          service_id: 1,
          price: 30,
          description: 'Крутой, супер-крутой',
          image:
            'https://avatars.dzeninfra.ru/get-zen_doc/4872899/pub_639635c549eaa0357410c94d_639636612df2797760a9537a/scale_1200',
          city_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 1,
          price: 30,
          description: 'Счастья, здоровья, мужа богатого',
          image:
            'https://info-profi.net/wp-content/uploads/2018/05/fotograf-700x400.jpg',
          city_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MyServices', null, {});
  },
};
