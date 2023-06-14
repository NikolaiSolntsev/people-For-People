const router = require('express').Router();
const { Country, City } = require('../../db/models');

router.route('/').get(async (req, res) => {
  try {
    const countries = await Country.findAll({
      include: {
        model: City,
      },
    });

    res.json( countries );
  } catch (error) {}
});

router.route('/:coutryId').get(async (req, res) => {
  const countryId = req.params.coutryId;
  try {
    const cities = await City.findAll({where:{country_id: countryId} });

    res.json( cities );
  } catch (error) {}
});
module.exports = router;
