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

module.exports = router;
