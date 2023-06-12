const router = require('express').Router();
const { MyService, User, City, Service } = require('../../db/models');

router.route('/')
.get( async (req, res) => {
try {
    const mySevices = await MyService.findAll(
        {
        include:[
            {model: User},
            {model: City},
            {model: Service}
        ]
    }
    )
    res.json({mySevices})
} catch (err) {
    res.json({message: err.message})
}

})

module.exports = router;