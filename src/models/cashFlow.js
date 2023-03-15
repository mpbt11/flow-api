class CashFlowModel {
  constructor(connection) {
    this._connection = connection;
  }

  async create(data) {
    const query = `INSERT INTO flow.flow_cash (
            id_category, 
            value, 
            reference_day, 
            start_date, 
            end_date, 
            type, 
            flow
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7
                ) RETURNING *`;

    const values = [
      data.id_category,
      data.value,
      data.reference_day,
      data.start_date,
      data.end_date,
      data.type,
      data.flow,
    ];

    const result = await this._connection.query(query, values);
    return result.rows[0];
  }
}

module.exports = CashFlowModel;
