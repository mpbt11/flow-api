const {
  badRequest,
  internalServerError,
} = require("../helpers/messageResponseHelpers");

const handleDatabaseError = (error, res) => {
  if (error.code === "23505") {
    return badRequest("Erro de violação de chave!", res);
  }
  if (error.code === "23502") {
    return badRequest("Valor nulo inserido em coluna não permitida!", res);
  }
  if (error.code === "22P02") {
    return badRequest("Valor inválido para tipo de dado!", res);
  }
  if (error.code === "42703") {
    return badRequest("Coluna não encontrada!", res);
  }
  if (error.code === "23503") {
    return badRequest("Violacão de chave estrangeira!", res);
  }
  if (error.code === "23514") {
    return badRequest("Verificação de domínio falhou!", res);
  }
  if (error.code === "22001") {
    return badRequest(
      "Comprimento do valor excede o tamanho máximo para a coluna!",
      res
    );
  }
  if (error.code === "22003") {
    return badRequest(
      "Valor fora do intervalo válido para o tipo de dado!",
      res
    );
  }
  if (error.code === "22007") {
    return badRequest("Valor de data/hora inválido!", res);
  }
  return internalServerError("Erro interno do servidor!", res);
};

module.exports = {
  handleDatabaseError,
};
