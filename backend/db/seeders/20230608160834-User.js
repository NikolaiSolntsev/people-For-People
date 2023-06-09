const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'fedor',
          password: await bcrypt.hash('123', 10),
          email: 'fedor@mail.com',
          language: 'русский',
          phone: '89141110000',
          score: 1050,
          photo:
            'https://www.sherdog.com/image_crop/300/300/_images/fighter/20141225122355_IMG_1684.JPG',
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'piter',
          password: await bcrypt.hash('123', 10),
          email: 'piter@mail.com',
          language: 'english',
          phone: '89141112222',
          score: 200,
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnNyKuw0LH7cO2NG-JiZB1dF-EjZi5VPp1J90cI_QG2GUM9-dCZpwcdkXUR24Muwws2A&usqp=CAU',
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'masha',
          password: await bcrypt.hash('123', 10),
          email: 'masha@mail.com',
          language: 'русский',
          phone: '89141113333',
          score: 1050,
          photo:
            'https://static1.funidelia.com/188333-f6_big2/masha-costume-masha-and-the-bear.jpg',
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
