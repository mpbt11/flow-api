const { Pool } = require("pg");
//const fs = require("fs");

//const ca = fs.readFileSync('/caminho/para/certificado/xxxxxx.pem');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: {
    // cert: cert,
    rejectUnauthorized: process.env.REJCTUNAUTH,
    //sslmode: process.env.PGSSLMODE,
  },
});

module.exports = pool;
