const router = require('express').Router();
const { Country, City, MessChat, User } = require('../../db/models');

router.route('/:service_id')
.get( async (req, res) => {
    const { service_id} = req.params;
    try {
        const messChatsData = await MessChat.findAll({where: {myService_id: service_id}, include: {model: User}});
const messChats = messChatsData.sort( (a, b) => b.id - a.id ) 
        res.json({messages: messChats})
    } catch (err) {
        res.json({message: err.message})
    }
})

module.exports = router;