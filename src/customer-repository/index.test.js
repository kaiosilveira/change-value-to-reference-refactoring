import { CustomerRepository } from './index';

describe('CustomerRepository', () => {
  beforeEach(() => {
    CustomerRepository.initialize();
  });

  describe('register', () => {
    it('should create a new customer', () => {
      const customer = CustomerRepository.register('123');
      expect(customer.id).toBe('123');
    });

    it('should return the existing customer', () => {
      const customer = CustomerRepository.register('123');
      const customer2 = CustomerRepository.register('123');
      expect(customer).toBe(customer2);
    });
  });

  describe('find', () => {
    it('should find a customer', () => {
      const customer = CustomerRepository.register('123');
      const foundCustomer = CustomerRepository.find('123');
      expect(customer).toBe(foundCustomer);
    });
  });
});
