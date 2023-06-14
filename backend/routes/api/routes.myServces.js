const router = require('express').Router();
const { MyService, User, City, Service, Country } = require('../../db/models');
const fileuploadMiddeleware = require('../../middleware/fileuploadMiddeleware');
// const myservice = require('../../db/models/myservice');

router.route('/').get(async (req, res) => {
    try {
    const myServices = await MyService.findAll({
      where: { seller_id: req.session.user.id },
      include: [{ model: User }, { model: City, include: { model: Country }}, { model: Service }],
    });
   
    res.json({ myServices });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});
router.route('/nameServices').get(async (req, res) => {
    try {
    const nameServices = await Service.findAll();

       res.json(nameServices);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});
router.post('/', async (req, res) => {
 
  try {
    
    const { image, video } = (req.files);
    const { service, country, city, price, description} = (req.body);
    const arrImg = await Promise.all(
      image.map(async (el) => await fileuploadMiddeleware(el)),
    );
     
    const serviceAdd = await MyService.create({
      service_id:service, country, city_id:city, price, description, image: arrImg[0], seller_id: req.session.user.id,
    }); 

    res.status(201).json(serviceAdd);
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});
router.post('/urlFoto', async (req, res) => {
  const file = req.files?.homesImg;

  const arrImg = await Promise.all(
    file.map(async (el) => await fileuploadMiddeleware(el))
  );
  res.json(arrImg);
});



module.exports = router;
