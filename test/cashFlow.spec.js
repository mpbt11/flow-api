const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");
const expect = chai.expect;

chai.use(chaiHttp);

describe(`POST /api/v1/cashflow/`, () => {
  const shouldCreateCashFlow = (done) => {
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
        flow: "saida",
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
        expect(res.body.data.cashFlow.flow).to.equal("saida");
        done();
      });
  };

  it("should create a cash flow", shouldCreateCashFlow);
});

describe(`PUT /api/v1/cashflow/979bfc7e-5d1c-49c7-b844-dddd50370c99`, () => {
  const shouldUpdateCashFlow = (done) => {
    chai
      .request(app)
      .put(`/api/v1/cashflow/979bfc7e-5d1c-49c7-b844-dddd50370c99`)
      .send({
        id_category: "952939c5-2ce2-430a-945d-24a501f91dba",
        value: 10000000000.0,
        reference_day: "10",
        start_date: "2024-01-01",
        end_date: "2025-01-01",
        type: "fixa",
        flow: "saida",
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
        expect(res.body.data.cashFlow.flow).to.equal("saida");
        done();
      });
  };

  it("should update a cash flow", shouldUpdateCashFlow);
});
