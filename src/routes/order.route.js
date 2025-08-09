const express = require('express');
const { createOrderService, getAllOrdersService } = require('../controllers/order.controller');

const router = express.Router();

router.get('/orders', getAllOrdersService);
router.post('/orders', createOrderService);

module.exports = router;