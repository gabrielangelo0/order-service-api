const express = require('express');
const users = require('../data/users');
const jwt = require('jsonwebtoken');
const middlewareValidate = require('../middlewares/validate');

const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((usuario) => usuario.username === username && usuario.password === password);

    if (!user) {
        return res.status(401).send('Credenciais inválidas');
    }

    const token = jwt.sign({
        id: user.id,
        username: user.username
    }, 'secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });
});

router.get('/profile', middlewareValidate, (req, res) => {
    // Handle fetching user profile logic here
    res.send('User profile endpoint');
});

module.exports = router;