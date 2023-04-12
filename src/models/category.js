class CategoryModel {
  constructor(connection) {
    this._connection = connection;
  }

  async get() {
    const query = `SELECT 
                    *,
                    type as transaction_type
                  FROM
                    flow.category`;

    const result = await this._connection.query(query);
    return result.rows;
  }

  async create(data) {
    const query = `INSERT INTO flow.category(
                      name_category, 
                      description, 
                      type, 
                      icon
                      ) VALUES (
                          $1, $2, $3, $4
                      ) RETURNING *`;

    const values = [data.name_category, data.description, data.type, data.icon];

    const result = await this._connection.query(query, values);
    return result.rows[0];
  }

  async update(data) {
    const query = `UPDATE 
                    flow.category 
                  SET
                    name_category = $2,
                    description = $3,
                    type = $4,
                    icon = $5
                  WHERE
                    id_category = $1
                  RETURNING *`;

    const values = [
      data.id_category,
      data.name_category,
      data.description,
      data.type,
      data.icon,
    ];

    const result = await this._connection.query(query, values);
    return result.rows[0];
  }

  async getById(data) {
    const query = `SELECT 
                    *,
                    type as transaction_type
                  FROM
                    flow.category
                  WHERE
                    id_category = $1`;

    const values = [data.id_category];

    const result = await this._connection.query(query, values);
    return result.rows[0];
  }

  async delete(data) {
    const query = `DELETE FROM
                    flow.category 
                  WHERE
                    id_category = $1
                  RETURNING *`;

    const values = [data.id_category];

    const result = await this._connection.query(query, values);
    return result.rowCount;
  }
}

module.exports = CategoryModel;
