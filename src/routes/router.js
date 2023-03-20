const express = require('express');
const User = require('./models/user');

const router = express.Router();

router.get('/users', async function(req, res) {
  const users = await User.findAll();
  res.json(users);
});

router.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  User.create({ name, email, password })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
});

router.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  User.findByPk(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      res.json(user);
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
});

router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  User.findByPk(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      user.name = name;
      user.email = email;
      user.password = password;

      return user.save();
    })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
});


module.exports = router;
