'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
const objs = [
  {
    name: 'Холодноводный тип.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROCK4tzUzPflzntS2SJ-EOLZZ8THRwv1GdqvWG2gF-0XTENlQ83BwRI9AIlqLOEKUSO2U&usqp=CAU',
    info: 'Рыбки из Европпы и Северной Америки.',
  },
  {
    name: 'Тепловодный тип.',
    image: 'https://kwitri.ru/wp-content/uploads/2017/09/Barb-Aquarium2.jpg',
    info: 'Рыбки из субтропических областей.',
  },
  {
    name: 'Умеренный тип.',
    image: 'https://media.price.ua/wp-content/uploads/2018/09/aquarium.jpg',
    info: 'Рыбки из экваториальных областей.',
  }
];
const thems = objs.map((them) => ({...them, createdAt: new Date(), updatedAt: new Date()}))
await  queryInterface.bulkInsert('Thems', thems)
  },

  async down (queryInterface, Sequelize) {
    await  queryInterface.bulkDelete('Thems')
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
