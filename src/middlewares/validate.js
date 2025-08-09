const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send('Token não fornecido');
    }

    try {
        const decoded = jwt.verify(token, 'secret_key');

        req.user = decoded;
    } catch (error) {
        return res.status(401).send('Token inválido');
    }

    console.log('token', token);
    return next();
}

module.exports = validateToken;