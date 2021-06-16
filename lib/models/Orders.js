const pool = require('pool');

// 1. define the shape of our data
// 2. define methods to access that data (CRUD)
class Order {
  id;
  quantityOfItems;

  constructor(row) {
    this.id = row.id;
    this.quantityOfItems = row.quantity_of_items;
  }

  // static method
  // instance method
  static async insert(quantityOfItems) {
    const { rows } = await pool.query(
      'INSERT INTO orders (quantity_of_items) VALUES ($1) RETURNING *',
      [quantityOfItems]
    );

    // rows = [{ id: '1', quantity_of_items: 10 }]
    // { id: '1', quantityOfItems: 10 }
    return new Order(rows[0]);
  }

  static async update(quantityOfItems, id) {
    const { rows } = await pool.query(
      'UPDATE orders SET quantity_of_items = $1 WHERE id = $2 RETURNING *', [quantityOfItems, id]
    );
    return rows;
  }

  static async grab() {
    const { rows } = await pool.query(
      'SELECT * FROM orders',
    );
    return rows;
  }


  static async grabById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM orders WHERE id=$1', [id]
    );
    return rows;
  }

}

module.exports = Order;
