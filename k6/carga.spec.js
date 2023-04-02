const http = require("k6/http");
const { sleep } = require("k6");

module.exports.default = function () {
  performancePost();
  performanceGet();
};

const performancePost = () => {
  http.post(
    "http://localhost:3000/api/v1/cashflow/",
    JSON.stringify({
      id_category: "952939c5-2ce2-430a-945d-24a501f91dba",
      value: 10000000000.0,
      reference_day: "10",
      start_date: "2024-01-01",
      end_date: "2025-01-01",
      type: "fixa",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const performanceGet = () => {
  http.get("http://localhost:3000/api/v1/cashflow/");
  sleep(1);
};

module.exports.options = {
  vus: 10,
  duration: "30s",
  rps: 100,
};
