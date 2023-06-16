const router = require('express').Router();
const {
  MyService,
  User,
  City,
  Service,
  MessChat,
  PhotoMyService,
} = require('../../db/models');

router.route('/').get(async (req, res) => {
  try {
    const myServices = await MyService.findAll({
      include: [
        { model: User },
        { model: City },

        { model: Service },
        { model: MessChat },
        // { model: PhotoMyService },
      ],
    });
    res.json({ myServices });
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { image } = req.files;
    const { price, country, city, description } = req.body;

    image.map(async (el) => await fileuploadMiddeleware(el));

    const imageService = await MyService.create({
      price,
      country,
      city,
      description,
      userId: 1,
    });
    res.status(201).json(imageService);
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});

module.exports = router;
