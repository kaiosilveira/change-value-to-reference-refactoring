import { CustomerRepository } from '../customer-repository';
import { Order } from './index';
describe('Order', () => {
  it('should have a customer', () => {
    CustomerRepository.initialize();
    CustomerRepository.register('456');

    const order = new Order({
      number: '123',
      customer: '456',
      customerRepository: CustomerRepository,
    });

    expect(order.customer.id).toBe('456');
  });
});
