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
          description: 'Могу рулить',
          image:
            'https://images.unsplash.com/photo-1504151806930-41c67891f1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRheGklMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          city_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 2,
          price: 30,
          description: 'Супер фото',
          image:
            'https://info-profi.net/wp-content/uploads/2018/05/fotograf-700x400.jpg',
          city_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 1,
          price: 30,
          description: 'Со мной хоть в горы',
          image:
            'https://images.unsplash.com/photo-1496283383941-8f638adf042c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRheGklMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          city_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 1,
          price: 30,
          description: 'Желтое такси',
          image:
            'https://images.unsplash.com/photo-1569433295058-aaa6338e25c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRheGklMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          city_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 1,
          price: 30,
          description: 'Такси на дубровку заказывали',
          image:
            'https://images.unsplash.com/photo-1612345642327-e79b84fd94f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRheGklMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          city_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 1,
          price: 30,
          description: 'Уже еду вы где стоите....',
          image:
            'https://plus.unsplash.com/premium_photo-1661418448559-c9551964736c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRheGklMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          city_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 2,
          price: 30,
          description: 'Счастья, здоровья, мужа богатого',
          image:
            'https://info-profi.net/wp-content/uploads/2018/05/fotograf-700x400.jpg',
          city_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 2,
          price: 30,
          description: 'Фото свадебные',
          image:
            'https://plus.unsplash.com/premium_photo-1661763150703-149671deb82c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          city_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 2,
          price: 30,
          description: 'За фоткую....',
          image:
            'https://images.unsplash.com/photo-1648205213977-075109f0b9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          city_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 2,
          price: 30,
          description: 'Фото от души',
          image:
            'https://plus.unsplash.com/premium_photo-1661763151264-702cd8450f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          city_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          seller_id: 2,
          service_id: 2,
          price: 30,
          description: 'Лучьшие фото вашего отпуска',
          image:
            'https://plus.unsplash.com/premium_photo-1661763045008-db14d918b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
