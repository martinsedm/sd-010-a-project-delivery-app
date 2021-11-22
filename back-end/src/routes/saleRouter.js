const express = require('express');

const { saleController } = require('../controller');
const midleware = require('../middleware');

const router = express.Router();

router.post('/', midleware.token, saleController.createSale);
router.get('/', saleController.getSales);
router.get('/:id', saleController.getSale);
router.put('/:id', saleController.updateStatus);

module.exports = router;