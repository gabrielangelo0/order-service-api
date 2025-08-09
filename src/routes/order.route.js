const express = require('express');
const { createOrderService, getAllOrdersService } = require('../controllers/order.controller');

const router = express.Router();

router.get('/service-orders', getAllOrdersService);
router.post('/service-orders', createOrderService);

module.exports = router;