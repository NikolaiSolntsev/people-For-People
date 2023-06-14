const router = require('express').Router();
const { MyService, User, City, Service, Country } = require('../../db/models');

router.route('/').get(async (req, res) => {
    try {
    const myServices = await MyService.findAll({
      where: { seller_id: req.session.user.id },
      include: [{ model: User }, { model: City, include: { model: Country }}, { model: Service }],
    });
    console.log(myServices);
    res.json({ myServices });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});
router.route('/nameServices').get(async (req, res) => {
    try {
    const nameServices = await Service.findAll();
    console.log(nameServices,'++++++++++++++++++++++++++++++++');
       res.json(nameServices);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});



module.exports = router;
