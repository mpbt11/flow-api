const { validateRequest } = require("../../utils/validatorsUtils");
const { body } = require('express-validator');

const createValidators = [
  body("id_category")
    .notEmpty()
    .isLength({ min: 1, max: 36 })
    .withMessage("O código da categoria é obrigatório"),
  validateRequest,

  body("value")
    .notEmpty()
    .withMessage("O valor deve ser informado corretamente")
    .isDecimal({locale: "pt-BR" })
    .withMessage(
      "O valor deve ter 13 dígitos antes da vírgula e 2 dígitos após a vírgula"
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
    .withMessage("A data início deve estar no formado YYYY-MM-DD"),
  validateRequest,

  body("end_date")
    .notEmpty()
    .withMessage("A data final é obrigatória")
    .isDate()
    .withMessage("A data final deve estar no formado YYYY-MM-DD"),
  validateRequest,

  body("type")
    .notEmpty()
    .withMessage("O tipo do custo é obrigatório")
    .isLength({ min: 4, max: 8 })
    .withMessage(
      "O tipo do custo deve ser informado corretamente. Ex: 'fixa' ou 'variavel'"
    ),
  validateRequest,

  body("flow")
    .notEmpty()
    .withMessage("O tipo do fluxo é obrigatório")
    .isLength({ min: 5, max: 7 })
    .withMessage(
      "O tipo do fluxo deve ser informado corretamente. Ex: 'saida' ou 'entrada'"
    ),
  validateRequest,
];

module.exports = {
  createValidators,
};
