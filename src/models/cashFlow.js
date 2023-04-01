class CashFlowModel {
  constructor(connection) {
    this._connection = connection;
  }

  async get() {
    const query = `SELECT 
                    *,
                    ffc.type as account_type,
                    fca.type as transaction_type
                  FROM
                    flow.flow_cash ffc
                  INNER JOIN 
                    flow.category fca
                  ON
                    fca.id_category = ffc.id_category`;

    const result = await this._connection.query(query);
    return result.rows;
  }


  async create(data) {
    const query = `INSERT INTO flow.flow_cash(
                      id_category, 
                      value, 
                      reference_day, 
                      start_date, 
                      end_date, 
                      type
                      ) VALUES (
                          $1, $2, $3, $4, $5, $6
                          ) RETURNING *`;

    const values = [
      data.id_category,
      data.value,
      data.reference_day,
      data.start_date,
      data.end_date,
      data.type
    ];

    const result = await this._connection.query(query, values);
    return result.rows[0];
  }

  async update(data) {
    const query = `UPDATE 
                    flow.flow_cash 
                  SET
                    id_category = $2, 
                    value = $3, 
                    reference_day = $4, 
                    start_date = $5, 
                    end_date = $6, 
                    type = $7
                  WHERE
                    id_flow_cash = $1
                  RETURNING *`;

    const values = [
      data.id_flow_cash,
      data.id_category,
      data.value,
      data.reference_day,
      data.start_date,
      data.end_date,
      data.type
    ];

    const result = await this._connection.query(query, values);
    return result.rows[0];
  }

  async getById(data) {
    const query = `SELECT 
                    *,
                    ffc.type as account_type,
                    fca.type as transaction_type
                  FROM
                    flow.flow_cash ffc
                  INNER JOIN 
                    flow.category fca
                  ON
                    fca.id_category = ffc.id_category
                  WHERE
                    ffc.id_flow_cash = $1`;

    const values = [
      data.id_flow_cash
    ];

    const result = await this._connection.query(query, values);
    return result.rows[0];
  }

  async delete(data) {
    const query = `DELETE FROM
                    flow.flow_cash 
                  WHERE
                    id_flow_cash = $1
                  RETURNING *`;

    const values = [
      data.id_flow_cash
    ];

    const result = await this._connection.query(query, values);
    return result.rowCount;
  }
}

module.exports = CashFlowModel;
