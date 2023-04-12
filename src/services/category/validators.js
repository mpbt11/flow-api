const { validateRequest } = require("../../utils/validatorsRequestUtils");
const { body, param } = require("express-validator");

const createValidatorsBody = [
  body("name_category")
    .notEmpty()
    .withMessage("O nome da categoria deve ser informado corretamente")
    .isLength({ min: 1, max: 100 })
    .withMessage(
      "A categoria deve ter um nome com no mínimo 1 e no máximo 100 caracteres"
    ),
  validateRequest,

  body("description")
    .notEmpty()
    .withMessage("A descrição da categoria deve ser informado corretamente")
    .isLength({ min: 1, max: 100 })
    .withMessage(
      "A categoria deve ter uma descrição com no mínimo 1 e no máximo 100 caracteres"
    ),
  validateRequest,

  body("type")
    .notEmpty()
    .withMessage("O tipo da categoria é obrigatório")
    .isLength({ min: 4, max: 8 })
    .custom((value, { req }) => {
      const allowedTypes = ["entrada", "saída"];
      return allowedTypes.includes(value);
    })
    .withMessage(
      "O tipo da categoria deve ser informada corretamente. Ex: 'entrada' ou 'saída'"
    ),
  validateRequest,

  body("icon")
    .notEmpty()
    .withMessage("O ícone é obrigatório")
    .isLength({ min: 1, max: 15 })
    .withMessage("O ícone deve conter no mínimo 1 e no máximo 100 caracteres"),
  validateRequest,
];

const createValidatorsParams = [
  param("id_category")
    .notEmpty()
    .isLength({ min: 1, max: 36 })
    .withMessage("O código da categoria é obrigatório"),
  validateRequest,
];

const createValidator = [
  param("id_category")
    .notEmpty()
    .isLength({ min: 1, max: 36 })
    .withMessage("O código da categoria é obrigatório"),
  validateRequest,

  body("name_category")
    .notEmpty()
    .withMessage("O nome da categoria deve ser informado corretamente")
    .isLength({ min: 1, max: 100 })
    .withMessage(
      "A categoria deve ter um nome com no mínimo 1 e no máximo 100 caracteres"
    ),
  validateRequest,

  body("description")
    .notEmpty()
    .withMessage("A descrição da categoria deve ser informado corretamente")
    .isLength({ min: 1, max: 100 })
    .withMessage(
      "A categoria deve ter uma descrição com no mínimo 1 e no máximo 100 caracteres"
    ),
  validateRequest,

  body("type")
    .notEmpty()
    .withMessage("O tipo da categoria é obrigatório")
    .isLength({ min: 4, max: 8 })
    .custom((value, { req }) => {
      const allowedTypes = ["entrada", "saída"];
      return allowedTypes.includes(value);
    })
    .withMessage(
      "O tipo da categoria deve ser informada corretamente. Ex: 'entrada' ou 'saída'"
    ),
  validateRequest,

  body("icon")
    .notEmpty()
    .withMessage("O ícone é obrigatório")
    .isLength({ min: 1, max: 15 })
    .withMessage("O ícone deve conter no mínimo 1 e no máximo 100 caracteres"),
  validateRequest,
];

module.exports = {
  createValidatorsBody,
  createValidatorsParams,
  createValidator,
};
