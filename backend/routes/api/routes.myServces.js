const router = require('express').Router();
const { MyService, User, City, Service } = require('../../db/models');

router.route('/').get(async (req, res) => {
  console.log(req.session.user.id);
  try {
    const myServices = await MyService.findAll({
      where: { seller_id: req.session.user.id },
      include: [{ model: User }, { model: City }, { model: Service }],
    });
    // console.log(myServices, 'qtttttttttttqqqqq');
    res.json({ myServices });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

module.exports = router;
