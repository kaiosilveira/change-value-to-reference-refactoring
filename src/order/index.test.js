import { Order } from './index';

describe('Order', () => {
  it('should have a customer', () => {
    const order = new Order({ number: '123', customer: '456' });
    expect(order.customer.id).toBe('456');
  });
});
