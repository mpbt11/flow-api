const {
  badRequest,
  internalServerError,
} = require("../helpers/messageResponseHelpers");

const handleDatabaseError = (error, res) => {
  
  switch (error.code) {
    case "23505":
      return badRequest("Erro de violação de chave!", res);

    case "23502":
      return badRequest("Valor nulo inserido em coluna não permitida!", res);

    case "22P02":
      return badRequest("Valor inválido para tipo de dado!", res);

    case "42703":
      return badRequest("Coluna não encontrada!", res);

    case "23503":
      return badRequest("Violação de chave estrangeira!", res);

    case "23514":
      return badRequest("Verificação de domínio falhou!", res);

    case "22001":
      return badRequest(
        "Comprimento do valor excede o tamanho máximo para a coluna!",
        res
      );

    case "22003":
      return badRequest(
        "Valor fora do intervalo válido para o tipo de dado!",
        res
      );

    case "22007":
      return badRequest("Valor de data/hora inválido!", res);

    default:
      return internalServerError("Erro interno do servidor!", res);
  }
};

module.exports = {
  handleDatabaseError,
};
