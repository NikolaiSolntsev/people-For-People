const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.route('/reg')
.post( async (req, res) => {

try {
    const {name, email, password, language, phone} = req.body;
   if(!name || !email || ! password || !language || !phone){res.json({ message: 'length'}); return}
    const user = await User.findOne({where: {email}});
    if(user){res.json({ message: 'old', user: undefined}); return};
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({name, password: hash, email});
        req.session.user = {id: newUser.id, name: newUser.name}
    res.json({user: req.session.user, message: 'ok'});
} catch (err) {
   res.json({message: err.message});
}
});


router.route('/log')
.put(async (req, res) => {
    try {
       const {email, password} = req.body;
      if(!email || !password ) {res.json({message: 'length'}); return };
       const user = await User.findOne({where: {email}, raw: true});
       if(user){
        const ok = await bcrypt.compare(password, user.password);
        if(ok){
            req.session.user = {id: newUser.id, name: newUser.name}
            res.json({message: 'ok', user: req.session.user});
        }
        else{
            res.json({message: 'err', user: undefined});
        }
       } 
       else{
        res.json({message: 'err', user: undefined});
    }
    } catch (err) {
       res.json({message: err.message}); 
    }
});


router.route('/logout')
.get((req, res) => {
    res.clearCookie('user_sid');
    res.json({message: 'ok'})
})

module.exports = router;