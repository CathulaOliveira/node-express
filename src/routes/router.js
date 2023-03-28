const express = require('express');
const router = express.Router();

function meuMiddleware(req, res, next) {
  console.log('middleware executado');
  next();
}

router.use(meuMiddleware);
const User = require('../models/user');

// Lista todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar usuários.' });
  }
});

// Busca um usuário por ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar usuário.' });
  }
});

// Cria um novo usuário
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar usuário.' });
  }
});

// Atualiza um usuário existente
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar usuário.' });
  }
});

// Define a rota DELETE para excluir um usuário pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // Busca o usuário pelo ID

    if (!user) { // Verifica se o usuário foi encontrado
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy(); // Exclui o usuário

    return res.status(204).send(); // Retorna uma resposta vazia (204 No Content)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;