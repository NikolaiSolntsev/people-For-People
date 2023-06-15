const router = require('express').Router();
const {
  MyService,
  User,
  City,
  Service,
  Country,
  Deal,
} = require('../../db/models');
const deal = require('../../db/models/deal');

router.route('/:serviceId/:buyerId').get(async (req, res) => {
  try {
    const { serviceId, buyerId } = req.params;
    const deal = await Deal.findOne({
      where: { myService_id: serviceId, buyer_id: buyerId },
    });
    deal && deal.status !== 'arhiv'
      ? res.json({ message: 'ok', deal })
      : res.json({ message: 'not' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { myService_id, buyer_id, sellerKey, buyerKey, status, seller_id } =
      req.body;

    const deal = await Deal.create({
      myService_id,
      buyer_id,
      sellerKey,
      buyerKey,
      status,
      seller_id,
    });
    deal ? res.json({ message: 'ok', deal }) : res.json({ message: 'not' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.route('/:dealId').put(async (req, res) => {
  try {
    const deal = await Deal.findOne({ where: { id: req.params.dealId } });

    deal.status = req.body.status;
    await deal.save();

    res.json({ m: 'ok' });
  } catch (error) {
    res.json({ message: error.message });
  }
});
// router.route('/').delete(async (req, res) => {
//   const obj = await Deal.findAll();
//   obj.forEach((element) => {
//     element.destroy();
//   });
//   res.json({ m: 'ok' });
// });

module.exports = router;
