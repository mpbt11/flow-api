const { validateRequest } = require("../../utils/validatorsRequestUtils");
const { body, param } = require("express-validator");
const { validateDateRange } = require("../../utils/dateValidatorsUtils");

const createValidatorsBody = [
  body("id_category")
    .notEmpty()
    .isLength({ min: 1, max: 36 })
    .withMessage("O código da categoria é obrigatório"),
  validateRequest,

  body("value")
    .notEmpty()
    .withMessage("O valor deve ser informado corretamente")
    .isDecimal({
      locale: "pt-BR",
      max_decimal_digits: 2,
      max_digits_before_decimal: 13,
    })
    .withMessage(
      "O valor deve ser um número decimal com no máximo 13 dígitos antes da vírgula e 2 dígitos após a vírgula"
    ),
  validateRequest,

  body("reference_day")
    .notEmpty()
    .withMessage("O dia para referência é obrigatório")
    .isLength({ min: 2, max: 2 })
    .withMessage("O dia deve ser informado corretamente, Ex: 05 ou 10"),
  validateRequest,

  body("start_date")
    .notEmpty()
    .withMessage("A data início é obrigatória")
    .isDate()
    .withMessage("A data início deve estar no formado YYYY-MM-DD")
    .custom((value, { req }) => {
      return validateDateRange(value, req.body.end_date);
    })
    .withMessage("A data início deve ser menor ou igual à data final"),
  validateRequest,

  body("end_date")
    .notEmpty()
    .withMessage("A data final é obrigatória")
    .isDate()
    .withMessage("A data final deve estar no formado YYYY-MM-DD")
    .custom((value, { req }) => {
      return validateDateRange(req.body.start_date, value);
    })
    .withMessage("A data final deve ser maior ou igual à data início"),
  validateRequest,

  body("type")
    .notEmpty()
    .withMessage("O tipo do custo é obrigatório")
    .isLength({ min: 4, max: 8 })
    .custom((value, { req }) => {
      const allowedTypes = ["fixa", "variável"];
      return allowedTypes.includes(value);
    })
    .withMessage(
      "O tipo do custo deve ser informado corretamente. Ex: 'fixa' ou 'variável'"
    ),
  validateRequest,
];

const createValidatorsParams = [
  param("id_flow_cash")
    .notEmpty()
    .isLength({ min: 1, max: 36 })
    .withMessage("O código do fluxo de caixa é obrigatório"),
  validateRequest,
];

const createValidator = [
  param("id_flow_cash")
    .notEmpty()
    .isLength({ min: 1, max: 36 })
    .withMessage("O código do fluxo de caixa é obrigatório"),
  validateRequest,

  body("id_category")
    .notEmpty()
    .isLength({ min: 1, max: 36 })
    .withMessage("O código da categoria é obrigatório"),
  validateRequest,

  body("value")
    .notEmpty()
    .withMessage("O valor deve ser informado corretamente")
    .isDecimal({
      locale: "pt-BR",
      max_decimal_digits: 2,
      max_digits_before_decimal: 13,
    })
    .withMessage(
      "O valor deve ser um número decimal com no máximo 13 dígitos antes da vírgula e 2 dígitos após a vírgula"
    ),
  validateRequest,

  body("reference_day")
    .notEmpty()
    .withMessage("O dia para referência é obrigatório")
    .isLength({ min: 2, max: 2 })
    .withMessage("O dia deve ser informado corretamente, Ex: 05 ou 10"),
  validateRequest,

  body("start_date")
    .notEmpty()
    .withMessage("A data início é obrigatória")
    .isDate()
    .withMessage("A data início deve estar no formado YYYY-MM-DD")
    .custom((value, { req }) => {
      return validateDateRange(value, req.body.end_date);
    })
    .withMessage("A data início deve ser menor ou igual à data final"),
  validateRequest,

  body("end_date")
    .notEmpty()
    .withMessage("A data final é obrigatória")
    .isDate()
    .withMessage("A data final deve estar no formado YYYY-MM-DD")
    .custom((value, { req }) => {
      return validateDateRange(req.body.start_date, value);
    })
    .withMessage("A data final deve ser maior ou igual à data início"),
  validateRequest,

  body("type")
    .notEmpty()
    .withMessage("O tipo do custo é obrigatório")
    .isLength({ min: 4, max: 8 })
    .custom((value, { req }) => {
      const allowedTypes = ["fixa", "variável"];
      return allowedTypes.includes(value);
    })
    .withMessage(
      "O tipo do custo deve ser informado corretamente. Ex: 'fixa' ou 'variável'"
    ),
  validateRequest,
];

module.exports = {
  createValidatorsBody,
  createValidatorsParams,
  createValidator,
};
