const { connectToDatabase } = require("../config/connectToDatabase");
const {
  onSuccess,
  notFound,
  created,
  badRequest,
} = require("../helpers/messageResponseHelpers");
const CategoryModel = require("../models/category");
const {
  createFormBody,
  createFormParams,
  createForm,
} = require("../services/category/formatting");

module.exports = {
  async create(req, res) {
    await connectToDatabase(async (connection) => {
      const categoryModel = new CategoryModel(connection);
      const category = await categoryModel.create(createFormBody(req));

      if (!category) return badRequest("Erro ao cadastrar!", res);

      return created("Cadastro realizado com sucesso!", res, {
        category,
      });
    }, res);
  },

  async update(req, res) {
    await connectToDatabase(async (connection) => {
      const categoryModel = new CategoryModel(connection);
      const category = await categoryModel.update(createForm(req));

      if (!category) return notFound("O item informado não existe!", res);

      return created("Atualizado com sucesso!", res, {
        category,
      });
    }, res);
  },

  async getById(req, res) {
    await connectToDatabase(async (connection) => {
      const categoryModel = new CategoryModel(connection);
      const category = await categoryModel.getById(createFormParams(req));

      if (category)
        return onSuccess("Consulta realizada com sucesso!", res, {
          category,
        });
    }, res);
  },

  async get(req, res) {
    await connectToDatabase(async (connection) => {
      const categoryModel = new CategoryModel(connection);
      const category = await categoryModel.get();

      if (category)
        return onSuccess("Listagem realizada com sucesso!", res, {
          category,
        });
    }, res);
  },

  async delete(req, res) {
    await connectToDatabase(async (connection) => {
      const categoryModel = new CategoryModel(connection);
      const category = await categoryModel.delete(createFormParams(req));

      if (category == 0) return notFound("O item informado não existe!", res);

      return onSuccess("Deletado com sucesso!", res, {
        category,
      });
    }, res);
  },
};
