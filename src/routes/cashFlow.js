const express = require('express');
const router = express.Router();

const cashFlowController = require('../controllers/cashFlowController');
const { createValidators } = require('../services/cashFlow/validators');

router.post('/', createValidators, cashFlowController.create);

module.exports = router;