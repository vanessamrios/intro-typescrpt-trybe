import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.inerface';
import OrderGroup from '../interfaces/orderGroup.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    // o retorno na query era diferente do esperando no teste e a função abaio foi usada para agrupar as orders por Id e os products em um array.
    // reference: https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
    const groupedById = orders.reduce((acc: OrderGroup, { id, userId, productId }) => {
      acc[id] = acc[id] || { id, userId, products: [] };
      
      acc[id].products.push(productId);
      
      return acc;
    }, {});
    // o values foi usado para remover as keys e chegar no formato esperado.
    const ordersGrouped = Object.values(groupedById); 

    // O retorno do reduce não estava ordenado por userId como o teste esperava mesmo depois de usar o ORDER BY na query, por isso foi precisso adicionar uma função para ordenar o retorno e atender o teste.
    // reference: https://stackoverflow.com/questions/43311121/sort-an-array-of-objects-in-typescript
    const orderSortByUserId = ordersGrouped.sort((a, b) => (a.userId < b.userId ? -1 : 1));
    return orderSortByUserId as Order[];
  }
}

export default OrderService;
