export class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = data.customer;
    this._customerRepository = data.customerRepository;
    // load other data
  }

  get customer() {
    return this._customerRepository.find(this._customer);
  }
}
