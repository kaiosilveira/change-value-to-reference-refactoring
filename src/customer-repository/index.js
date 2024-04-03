import { Customer } from '../customer';

let _data = [];

export class CustomerRepository {
  static initialize() {
    _data = {};
    _data.customers = new Map();
  }

  static register(id) {
    if (!_data.customers.has(id)) {
      _data.customers.set(id, new Customer(id));
    }

    return this.find(id);
  }

  static find(id) {
    return _data.customers.get(id);
  }
}
