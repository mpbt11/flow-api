const express = require('express');
const router = express.Router();

const cashFlowController = require('../controllers/cashFlowController');
const { createValidatorsBody, createValidatorsParams, createValidator } = require('../services/cashFlow/validators');

router.post('/', createValidatorsBody, cashFlowController.create);
router.put('/:id_flow_cash', createValidator, cashFlowController.update);
router.get('/', cashFlowController.get);
router.get('/:id_flow_cash', createValidatorsParams, cashFlowController.getById);
router.delete('/:id_flow_cash', createValidatorsParams, cashFlowController.delete);

module.exports = router;