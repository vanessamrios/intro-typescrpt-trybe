import { Pool } from 'mysql2/promise';
import OrderTable from '../interfaces/orderTable.inerface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<OrderTable[]> {
    const result = await this.connection.execute(`SELECT o.id, o.userId, p.id AS productId
    FROM Trybesmith.Orders AS o
    LEFT JOIN Trybesmith.Products AS p
    ON p.orderId = o.id
    ORDER BY o.userId;`);
    const [rows] = result;
    return rows as OrderTable[];
  }
}