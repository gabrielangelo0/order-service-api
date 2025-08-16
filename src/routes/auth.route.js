const express = require('express');
const users = require('../data/users');
const jwt = require('jsonwebtoken');
const middlewareValidate = require('../middlewares/validate');

const router = express.Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find((usuario) => usuario.email === email && usuario.password === password);

    if (!user) {
        return res.status(401).send('Credenciais inválidas');
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email
    }, 'secret_key', { expiresIn: '1h' });

    res.status(200).json({ token, user });
});

router.get('/auth/me', middlewareValidate, (req, res) => {
    // Handle fetching user profile logic here
    res.send('User profile endpoint');
});

module.exports = router;