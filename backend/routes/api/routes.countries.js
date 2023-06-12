const router = require('express').Router();
const { Country, City } = require('../../db/models');

router.route('/').get(async (req, res) => {
  try {
    const countries = await Country.findAll({
      include: {
        model: City,
      },
    });

    res.json({ message: 'ok', countries });
  } catch (error) {}
});

module.exports = router;
