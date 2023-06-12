const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');


router.route('/check')
.get( (req, res) => {
const { user } = req.session;
  res.json({message: 'ok', user})
})


router.route('/registration').post(async (req, res) => {
  console.log('122333');
  try {
    const { name, phone, password, email, language } = req.body;

    if (!name || !phone || !password || !email || !language) {
      res.status(400).json({ message: 'Заполните все поля' });
      return;
    }

    const user = await User.findOne({ where: { phone } });

    if (user) {
      res.json({
        message: 'Такой пользователь уже существует.',
        user: undefined,
      });
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, phone, password: hash, email });

    req.session.user = {
      id: newUser.id,
      name: newUser.name,
      phone: newUser.phone,
    };

    res.json({ user: req.session.user, message: 'ok' });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.route('/log').put(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({ message: 'length' });
      return;
    }
    const user = await User.findOne({ where: { phone }, raw: true });
    if (user) {
      const ok = await bcrypt.compare(password, user.password);
      if (ok) {
        req.session.user = { id: newUser.id, name: newUser.name };
        res.json({ message: 'ok', user: req.session.user });
      } else {
        res.json({ message: 'err', user: undefined });
      }
    } else {
      res.json({ message: 'err', user: undefined });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.route('/logout').get(async (req, res) => {
  
  await req.session.destroy()
    if (!req.session) {
      res.clearCookie('user_sid');
    res.json({ message: 'ok' })
    } else { return res.status(500).json({ message: 'Ошибка при удалении сессии' });
   }
  
});

module.exports = router;
