const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.route('/change').put(async (req, res) => {
  const { name, email, language, photo } = req.body;
  try {
    const newUser = await User.findOne({
      where: { id: Number(req.session.user.id) },
    });
    if (newUser) {
      newUser.name = name;
      newUser.email = email;
      newUser.language = language;
      newUser.photo = photo;

      await newUser.save();
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        score: newUser.score,
        phone: newUser.phone,
        language: newUser.language,
        photo: newUser.photo,
      };
      res.status(200).json({ newUser, message: 'ok' });
    } else {
      res.status(401).json({
        message: 'Такого пользователя нет либо пароли не совпадают',
        user: undefined,
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.route('/check').get((req, res) => {
  const { user } = req.session;
  res.json({ message: 'ok', user });
});

router.route('/registration').post(async (req, res) => {
  console.log('122333');
  try {
    const { name, phone, password, repeatPassword, email, language } = req.body;
    const reightPhone = phone.replace(/[^+\d]/g, '')
    if (
      !name ||
      !phone ||
      !password ||
      !email ||
      !language ||
      !repeatPassword
    ) {
      res.status(400).json({ message: 'Заполните все поля', user: undefined });
      return;
    }
    if(reightPhone.length < 11 ){
      res.status(422).json({
        message: 'Cлишком короткий номер :-) ',
        user: undefined,
      });
    }
    if (password !== repeatPassword) {
      res.status(422).json({
        message: 'Пароли не совпадают',
        user: undefined,
      });
      return;
    } else {
     
      const user = await User.findOne({ where: { phone:reightPhone } });
      const user1 = await User.findOne({ where: { email } });
      if (user) {
        res.status(422).json({
          message:
            'Пользователь с этим телефоном  уже существует. Авторизируйтесь',
          user: undefined,
        })
        return;
      }
      if (user1) {
        res.status(422).json({
          message:
            'Пользователь с этим email уже существует. Авторизируйтесь',
          user: undefined,
        })
        return;
      }

      const hash = await bcrypt.hash(password, 10);
      if (!hash) {
        throw new Error('Error generating password hash');
      }

      const newUser = await User.create({
        name,
        photo:
          'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Pic.png',
        phone:reightPhone,
        password: hash,
        email,
        language,
      });

      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        photo: newUser.photo,
        phone: newUser.phone,
        email: newUser.email,
        language: newUser.language,
        score: newUser.score,
      };

      // console.log('User session:', req.session.user);
      res.json({
        id: newUser.id,
        user: req.session.user,
        name: newUser.name,
        message: 'ok',
      });
    }
  } catch (err) {
       console.log(err);
    res.json({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
  // console.log(req.body);
  try {
    const { phone, password } = req.body;
    const reightPhone = phone.replace(/[^\+\d]/g, '')
    if (!phone || !password) {
      res.status(400).json({ message: 'Заполните все поля', user: undefined });
      return;
    }

    const user = await User.findOne({ where: { phone: reightPhone }, raw: true });

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        score: user.score,
        photo: user.photo,
        language: user.language,
      };

      res.status(200).json({ user: req.session.user, message: 'ok' });
    } else if (!user) {
      res.status(401).json({
        message: 'Мы не знакомы с таким пользователем. Зарегистрируйтесь.',
        user: undefined,
      });
    } else if (!(await bcrypt.compare(password, user.password))) {
      res.status(401).json({
        message: 'Неверный пароль.',
        user: undefined,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/logout', async (req, res) => {
  await req.session.destroy();
  if (!req.session) {
    res.clearCookie('user_sid');
    res.json({ message: 'ok' });
  } else {
    return res.status(500).json({ message: 'Ошибка при удалении сессии' });
  }
});

module.exports = router;
