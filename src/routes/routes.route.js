const express = require('express');
const orderServiceRoutes = require('./order.route');
const authRoutes = require('./auth.route');

const router = express.Router();

router.use(orderServiceRoutes);
router.use(authRoutes);

module.exports = router;
