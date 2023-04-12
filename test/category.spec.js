const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");
const expect = chai.expect;
var idCategory = null;

chai.use(chaiHttp);

describe(`POST /api/v1/category/`, () => {
  it("should create a category", (done) => {
    chai
      .request(app)
      .post("/api/v1/category/")
      .send({
        name_category: "Teste",
        description: "Descrição do teste",
        type: "saída",
        icon: "favorite",
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Cadastro realizado com sucesso!");
        expect(res.body.data).to.be.an("object");
        expect(res.body.data.category).to.be.an("object");
        expect(res.body.data.category.id_category).to.be.a("string");
        expect(res.body.data.category.description).to.equal(
          "Descrição do teste"
        );
        expect(res.body.data.category.type).to.equal("saída");
        expect(res.body.data.category.icon).to.equal("favorite");
        idCategory = res.body.data.category.id_category;
        done();
      });
  });
});

describe(`GET /api/v1/category/`, () => {
  it("shoud get a category", (done) => {
    chai
      .request(app)
      .get(`/api/v1/category/`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Listagem realizada com sucesso!");
        expect(res.body.data.category).to.be.an("array");
        expect(res.body.data.category[0].id_category).to.be.a("string");
        expect(res.body.data.category[0].description).to.be.a("string");
        expect(res.body.data.category[0].type).to.be.a("string");
        expect(res.body.data.category[0].icon).to.be.a("string");
        done();
      });
  });
});

describe(`GET /api/v1/category/:id_category`, () => {
  it("should get a category by id", (done) => {
    chai
      .request(app)
      .get(`/api/v1/category/${idCategory}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Consulta realizada com sucesso!");
        expect(res.body.data).to.be.an("object");
        expect(res.body.data.category).to.be.an("object");
        expect(res.body.data.category.id_category).to.be.a("string");
        expect(res.body.data.category.description).to.be.a("string");
        expect(res.body.data.category.type).to.be.a("string");
        expect(res.body.data.category.icon).to.be.a("string");
        done();
      });
  });
});

describe(`PUT /api/v1/category/:id_category`, () => {
  it("should update a category", (done) => {
    chai
      .request(app)
      .put(`/api/v1/category/${idCategory}`)
      .send({
        name_category: "Teste",
        description: "Descrição do teste 2",
        type: "entrada",
        icon: "favorite",
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Atualizado com sucesso!");
        expect(res.body.data).to.be.an("object");
        expect(res.body.data.category).to.be.an("object");
        expect(res.body.data.category.id_category).to.be.a("string");
        expect(res.body.data.category.description).to.equal(
          "Descrição do teste 2"
        );
        expect(res.body.data.category.type).to.equal("entrada");
        expect(res.body.data.category.icon).to.equal("favorite");
        done();
      });
  });
});

describe(`DELETE /api/v1/category/:id_category`, () => {
  it("should delete a category", (done) => {
    chai
      .request(app)
      .delete(`/api/v1/category/${idCategory}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Deletado com sucesso!");
        done();
      });
  });

  it("should return 404 when category is not found", (done) => {
    const nonExistingId = "92b1ed60-9d6e-4ac1-8beb-49cf0eb77b9f";
    chai
      .request(app)
      .delete(`/api/v1/category/${nonExistingId}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.message).to.equal("O item informado não existe!");
        done();
      });
  });
});
