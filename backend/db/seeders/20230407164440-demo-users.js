'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const objs = [
      {
        name: 'papa',
        password: '$2b$10$pafoBu0eAAIO17yLE1wKiePFxX8mkjjdA0c6uJ.X4Rb6aLrg07HYi',
        email: 'aledab@mail.ru',
        language: 'eng',
        phone: '123456789',
        score: 100,
        photo: `https://avatars.dzeninfra.ru/get-zen_doc/1641493/pub_5d905e310a451800b0c737da_5d905ed91febd400b05633b9/scale_1200`
       
      },
      {
        name: 'mama',
        password: '$2b$10$pafoBu0eAAIO17yLE1wKiePFxX8mkjjdA0c6uJ.X4Rb6aLrg07HYi',
        email: 'mama@mail.ru',
        language: 'rus',
        phone: '1234567895',
        score: 100,
        photo: `https://avatars.dzeninfra.ru/get-zen_doc/1641493/pub_5d905e310a451800b0c737da_5d905ed91febd400b05633b9/scale_1200`
       
      }
    ]
    
    const users = objs.map((user) => ({...user, createdAt: new Date(), updatedAt: new Date()}))
    await  queryInterface.bulkInsert('Users', users)
  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.bulkDelete('Users')
  }
};
