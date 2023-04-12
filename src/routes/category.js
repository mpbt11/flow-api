const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');
const { createValidatorsBody, createValidatorsParams, createValidator } = require('../services/category/validators');

router.post('/', createValidatorsBody, categoryController.create);
router.put('/:id_category', createValidator, categoryController.update);
router.get('/', categoryController.get);
router.get('/:id_category', createValidatorsParams, categoryController.getById);
router.delete('/:id_category', createValidatorsParams, categoryController.delete);

module.exports = router;