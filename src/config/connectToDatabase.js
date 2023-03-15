const { Pool } = require("pg");
const { internalServerError } = require("../helpers/messageResponseHelpers");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function connectToDatabase(callback, res) {
    const client = await pool.connect();
    try {
      return await callback(client);
    } catch (err) {
      internalServerError("Erro interno", res);
    } finally {
      client.release();
    }
  }

module.exports = {
  connectToDatabase,
};
