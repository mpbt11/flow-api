const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");
const expect = chai.expect;
var idFlowCash = null;

chai.use(chaiHttp);

describe(`POST /api/v1/cashflow/`, () => {
  it("should create a cash flow", (done) => {
    chai
      .request(app)
      .post("/api/v1/cashflow")
      .send({
        id_category: "952939c5-2ce2-430a-945d-24a501f91dba",
        value: 10000000000.0,
        reference_day: "10",
        start_date: "2024-01-01",
        end_date: "2025-01-01",
        type: "fixa",
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Cadastro realizado com sucesso!");
        expect(res.body.data).to.be.an("object");
        expect(res.body.data.cashFlow).to.be.an("object");
        expect(res.body.data.cashFlow.id_flow_cash).to.be.a("string");
        expect(res.body.data.cashFlow.id_category).to.equal(
          "952939c5-2ce2-430a-945d-24a501f91dba"
        );
        expect(res.body.data.cashFlow.value).to.equal("10000000000.00");
        expect(res.body.data.cashFlow.reference_day).to.equal("10");
        expect(res.body.data.cashFlow.start_date).to.equal(
          "2024-01-01T03:00:00.000Z"
        );
        expect(res.body.data.cashFlow.end_date).to.equal(
          "2025-01-01T03:00:00.000Z"
        );
        expect(res.body.data.cashFlow.type).to.equal("fixa");
        idFlowCash = res.body.data.cashFlow.id_flow_cash;
        done();
      });
  });
});

describe(`GET /api/v1/cashflow/`, () => {
  it("shoud get a cash flows", (done) => {
    chai
      .request(app)
      .get(`/api/v1/cashflow/`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Listagem realizada com sucesso!");
        expect(res.body.data.cashFlow).to.be.an("array");
        expect(res.body.data.cashFlow[0]).to.be.an("object");
        expect(res.body.data.cashFlow[0].id_flow_cash).to.be.a("string");
        expect(res.body.data.cashFlow[0].id_category).to.be.a("string");
        expect(res.body.data.cashFlow[0].value).to.be.a("string");
        expect(res.body.data.cashFlow[0].reference_day).to.be.a("string");
        expect(res.body.data.cashFlow[0].start_date).to.be.a("string");
        expect(res.body.data.cashFlow[0].end_date).to.be.a("string");
        expect(res.body.data.cashFlow[0].transaction_type).to.be.a("string");
        expect(res.body.data.cashFlow[0].account_type).to.be.a("string");
        done();
      });
  });
});

describe(`GET /api/v1/cashflow/:id_flow_cash`, () => {
  it("should get a cash flow by id", (done) => {
    chai
      .request(app)
      .get(`/api/v1/cashflow/${idFlowCash}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Consulta realizada com sucesso!");
        expect(res.body.data).to.be.an("object");
        expect(res.body.data.cashFlow).to.be.an("object");
        expect(res.body.data.cashFlow.id_flow_cash).to.be.a("string");
        expect(res.body.data.cashFlow.id_category).to.be.a("string");
        expect(res.body.data.cashFlow.value).to.be.a("string");
        expect(res.body.data.cashFlow.reference_day).to.be.a("string");
        expect(res.body.data.cashFlow.start_date).to.be.a("string");
        expect(res.body.data.cashFlow.end_date).to.be.a("string");
        expect(res.body.data.cashFlow.transaction_type).to.be.a("string");
        expect(res.body.data.cashFlow.account_type).to.be.a("string");
        done();
      });
  });
});

describe(`PUT /api/v1/cashflow/:id_flow_cash`, () => {
  it("should update a cash flow", (done) => {
    chai
      .request(app)
      .put(`/api/v1/cashflow/${idFlowCash}`)
      .send({
        id_category: "952939c5-2ce2-430a-945d-24a501f91dba",
        value: 10000000000.0,
        reference_day: "10",
        start_date: "2024-01-01",
        end_date: "2025-01-01",
        type: "fixa",
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Atualizado com sucesso!");
        expect(res.body.data).to.be.an("object");
        expect(res.body.data.cashFlow).to.be.an("object");
        expect(res.body.data.cashFlow.id_flow_cash).to.be.a("string");
        expect(res.body.data.cashFlow.id_category).to.equal(
          "952939c5-2ce2-430a-945d-24a501f91dba"
        );
        expect(res.body.data.cashFlow.value).to.equal("10000000000.00");
        expect(res.body.data.cashFlow.reference_day).to.equal("10");
        expect(res.body.data.cashFlow.start_date).to.equal(
          "2024-01-01T03:00:00.000Z"
        );
        expect(res.body.data.cashFlow.end_date).to.equal(
          "2025-01-01T03:00:00.000Z"
        );
        expect(res.body.data.cashFlow.type).to.equal("fixa");
        done();
      });
  });
});

describe(`DELETE /api/v1/cashflow/:id_flow_cash`, () => {
  it("should delete a cash flow", (done) => {
    chai
      .request(app)
      .delete(`/api/v1/cashflow/${idFlowCash}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Deletado com sucesso!");
        done();
      });
  });

  it("should return 404 when cash flow is not found", (done) => {
    const nonExistingId = "92b1ed60-9d6e-4ac1-8beb-49cf0eb77b9f";
    chai
      .request(app)
      .delete(`/api/v1/cashflow/${nonExistingId}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.message).to.equal("O item informado não existe!");
        done();
      });
  });
});
