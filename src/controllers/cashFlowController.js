const { connectToDatabase } = require("../config/connectToDatabase");
const { onSucess } = require("../helpers/messageResponseHelpers");
const CashFlowModel = require("../models/CashFlow");
const { createForm } = require("../services/cashFlow/formatting");

module.exports = {
  async create(req, res) {
    await connectToDatabase(async (connection) => {
      const cashFlowModel = new CashFlowModel(connection);
      const cashFlow = await cashFlowModel.create(createForm(req));

      if (cashFlow)
        return onSucess("Cadastro realizado com sucesso!", res, {
          cashFlow,
        });
    }, res);
  },
};
