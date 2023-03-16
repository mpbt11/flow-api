const { connectToDatabase } = require("../config/connectToDatabase");
const {
  onSuccess,
  notFound,
  created,
  badRequest,
} = require("../helpers/messageResponseHelpers");
const CashFlowModel = require("../models/CashFlow");
const {
  createFormBody,
  createFormParams,
  createForm,
} = require("../services/cashFlow/formatting");

module.exports = {
  async create(req, res) {
    await connectToDatabase(async (connection) => {
      const cashFlowModel = new CashFlowModel(connection);
      const cashFlow = await cashFlowModel.create(createFormBody(req));

      if (!cashFlow) return badRequest("Erro ao cadastrar!", res);

      return created("Cadastro realizado com sucesso!", res, {
        cashFlow,
      });
    }, res);
  },

  async update(req, res) {
    await connectToDatabase(async (connection) => {
      const cashFlowModel = new CashFlowModel(connection);
      const cashFlow = await cashFlowModel.update(createForm(req));

      if (!cashFlow) return notFound("O item informado não existe!", res);

      return created("Atualizado com sucesso!", res, {
        cashFlow,
      });
    }, res);
  },

  async getById(req, res) {
    await connectToDatabase(async (connection) => {
      const cashFlowModel = new CashFlowModel(connection);
      const cashFlow = await cashFlowModel.getById(createFormParams(req));

      if (cashFlow)
        return onSuccess("Consulta realizada com sucesso!", res, {
          cashFlow,
        });
    }, res);
  },

  async get(req, res) {
    await connectToDatabase(async (connection) => {
      const cashFlowModel = new CashFlowModel(connection);
      const cashFlow = await cashFlowModel.get();

      if (cashFlow)
        return onSuccess("Listagem realizada com sucesso!", res, {
          cashFlow,
        });
    }, res);
  },

  async delete(req, res) {
    await connectToDatabase(async (connection) => {
      const cashFlowModel = new CashFlowModel(connection);
      const cashFlow = await cashFlowModel.delete(createFormParams(req));

      if (cashFlow == 0) return notFound("O item informado não existe!", res);

      return onSuccess("Deletado com sucesso!", res, {
        cashFlow,
      });
    }, res);
  },
};
