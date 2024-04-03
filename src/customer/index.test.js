import { Customer } from './index';

describe('Customer', () => {
  it('should have an id', () => {
    const customer = new Customer('456');
    expect(customer.id).toBe('456');
  });
});
