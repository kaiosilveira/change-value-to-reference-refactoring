import { Customer } from '../customer';

export class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
    // load other data
  }

  get customer() {
    return this._customer;
  }
}
