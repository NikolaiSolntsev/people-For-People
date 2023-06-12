const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

// router.get('/user', async (req, res) => {
//   console.log(res.locals);
//   const { user } = res.locals;
//   // console.log('ssssssssssss', user);
//   if (user) {
//     res.status(201).json(
//       {
//         isLoggedIn: true,
//         user: {
//           id: user.id,
//           name: user.name,
//           phone: user.phone,
//         },
//       },
//       console.log(user, 'aaaaaaaaaaa')
//     );
//   } else {
//     res.status(500).json({ isLoggedIn: false });
//   }
// });

router.route('/check').get((req, res) => {
  const { user } = req.session;
  res.json({ message: 'ok', user });
});

router.route('/registration').post(async (req, res) => {
  // console.log('122333');

  try {
    const { name, phone, password, email, language } = req.body;
    if (!name || !phone || !password || !email || !language) {
      res.status(400).json({ message: 'Заполните все поля' });
      return;
    }
    const user = await User.findOne({ where: { phone } });
    if (user) {
      res.status(422).json({
        message: 'Такой пользователь уже существует.',
        user: undefined,
      });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    if (!hash) {
      throw new Error('Error generating password hash');
    }
    const newUser = await User.create({
      name,
      phone,
      password: hash,
      email,
    });
    req.session.user = {
      id: newUser.id,
      name: newUser.name,
      phone: newUser.phone,
    };
    // console.log('User session:', req.session.user);
    res.json({
      id: newUser.id,
      user: req.session.user,
      name: newUser.name,
      message: 'ok',
    });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});
router.post('/login', async (req, res) => {
  // console.log(req.body);
  try {
    const { name, phone, password } = req.body;

    if (!name || !phone || !password) {
      res.status(400).json({ message: 'Заполните все поля' });
      return;
    }

    const user = await User.findOne({ where: { phone }, raw: true });
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = { id: user.id, name: user.name, phone: user.phone };

      res.status(200).json({ user: req.session.user, message: 'ok' });
      // console.log('User session:', req.session.user);
    } else {
      res.status(401).json({
        message:
          'Такого пользователя нет либо пароли не совпадают. Зарегистрируйтесь.',
        user: undefined,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/logout', async (req, res) => {
  // console.log(121112121212);
  await req.session.destroy();
  if (!req.session) {
    res.clearCookie('user_sid');
    res.json({ message: 'ok' });
  } else {
    return res.status(500).json({ message: 'Ошибка при удалении сессии' });
  }
});

module.exports = router;
