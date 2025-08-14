const express = require('express');
const { createOrderService, getAllOrdersService } = require('../controllers/order.controller');
const middlewareValidate = require('../middlewares/validate');

const router = express.Router();

router.get('/service-orders', middlewareValidate, getAllOrdersService);
router.post('/service-orders', middlewareValidate, createOrderService);

module.exports = router;