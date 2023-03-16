const { Pool } = require("pg");
const { handleDatabaseError } = require("../utils/databaseErrorHandlerUtils");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function connectToDatabase(callback, res) {
    const client = await pool.connect();
    try {
      return await callback(client);
    } catch (err) {
      handleDatabaseError(err, res)
    } finally {
      client.release();
    }
  }

module.exports = {
  connectToDatabase,
};
