const router = require('express').Router();
const {
  Country,
  City,
  Deal,
  MyService,
  User,
  Service,
} = require('../../db/models');

router.route('/').get(async (req, res) => {
  try {
    const { user } = req.session;
    const byDealData = await Deal.findAll({
      where: { buyer_id: user.id },
      include: {
        model: MyService,
        include: [{ model: User }, { model: Service }],
      },
    });

    const byDeal = byDealData.filter(
      (el) => el.status !== 'arhiv' && el.status !== 'byuer arhiv'
    );

    res.json({ byDeal });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.route('/seller').get(async (req, res) => {
  try {
    const { user } = req.session;

    const seleDealData = await Deal.findAll({
      where: { seller_id: user.id },
      include: [
        {
          model: User,
        },
        { model: MyService, include: { model: Service } },
      ],
    });

    const seleDeal = seleDealData.filter(
      (el) => el.status !== 'arhiv' && el.status !== 'seller arhiv'
    );

    // const seleDeal = await Promise.all(
    //   seleDealData.map(async (el) => ({
    //     ...el,
    //     buyer: await User.findOne({ where: { id: el.buyer_id } }),
    //   }))
    // );
    console.log(seleDeal);
    res.json({ seleDeal });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
