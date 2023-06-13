const router = require('express').Router();
const { Country, City, MessChat, User } = require('../../db/models');

router.route('/:user_id')
.get( async (req, res) => {
const { user_id } = req.params;
try {
    const messChatsData = await MessChat.findAll({where: {saler_id: user_id},
    include: {model: User}
    });
    const messChats= messChatsData.sort( (a, b) => b.id - a.id);
    res.json({messChats})
} catch (err) {
    res.json({message: err.message})
}
})

module.exports = router;