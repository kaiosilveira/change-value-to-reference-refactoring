[![Continuous Integration](https://github.com/kaiosilveira/change-value-to-reference-refactoring/actions/workflows/ci.yml/badge.svg)](https://github.com/kaiosilveira/change-value-to-reference-refactoring/actions/workflows/ci.yml)

ℹ️ _This repository is part of my Refactoring catalog based on Fowler's book with the same title. Please see [kaiosilveira/refactoring](https://github.com/kaiosilveira/refactoring) for more details._

---

# Change Value To Reference

<table>
<thead>
<th>Before</th>
<th>After</th>
</thead>
<tbody>
<tr>
<td>

```javascript
let customer = new Customer(customerData);
```

</td>

<td>

```javascript
let customer = customerRepository.get(customerData.id);
```

</td>
</tr>
</tbody>
</table>

**Inverse of: [Change Reference to Value](https://github.com/kaiosilveira/change-reference-to-value-refactoring)**

Mutability is one of the most important aspects to be aware of in any software program. Ripple effects can cause hard-to-debug problems and flaky tests but, sometimes, they're exactly what we're expecting to happen. This refactoring helps in cases where we want our underlying objects (or data structures) to be mutable, often by protecting them and providing a standard, centralized, and memory-efficient way of retrieving them.

## Working example

Our example, extracted from the book, is a program where we have orders and customers. Instances of the `Order` class instantiate a new `Customer` object every time an `Order` object is constructed. The code for the `Order` class looks like this:

```javascript
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
```

We want to stop this construction process by providing a standardized way of registering and fetching existing customers, by levaring the **[Repository Pattern](https://github.com/kaiosilveira/poeaa-repository)**.

### Test suite

The test suite for this simple program is also pretty simple. For `Order`, we make sure that it has a customer:

```javascript
describe('Order', () => {
  it('should have a customer', () => {
    const order = new Order({ number: '123', customer: '456' });
    expect(order.customer.id).toBe('456');
  });
});
```

For `Customer`, we make sure it has an id:

```javascript
describe('Customer', () => {
  it('should have an id', () => {
    const customer = new Customer('456');
    expect(customer.id).toBe('456');
  });
});
```

This is the minimum we need to make safe changes to the code.

### Steps

As we're going to remove on-the-fly instantiations of `Customer`, we need to provide a standardized way of creating and retrieving its instances, so we introduce a `CustomerRepository`:

```diff
@@ -0,0 +1,22 @@
+import { Customer } from '../customer';
+
+let _data = [];
+
+export class CustomerRepository {
+  static initialize() {
+    _data = {};
+    _data.customers = new Map();
+  }
+
+  static register(id) {
+    if (!_data.customers.has(id)) {
+      _data.customers.set(id, new Customer(id));
+    }
+
+    return this.find(id);
+  }
+
+  static find(id) {
+    return _data.customers.get(id);
+  }
+}

diff --git a/src/customer-repository/index.test.js b/src/customer-repository/index.test.js
new file mode 100644
@@ -0,0 +1,28 @@
+import { CustomerRepository } from './index';
+
+describe('CustomerRepository', () => {
+  beforeEach(() => {
+    CustomerRepository.initialize();
+  });
+
+  describe('register', () => {
+    it('should create a new customer', () => {
+      const customer = CustomerRepository.register('123');
+      expect(customer.id).toBe('123');
+    });
+
+    it('should return the existing customer', () => {
+      const customer = CustomerRepository.register('123');
+      const customer2 = CustomerRepository.register('123');
+      expect(customer).toBe(customer2);
+    });
+  });
+
+  describe('find', () => {
+    it('should find a customer', () => {
+      const customer = CustomerRepository.register('123');
+      const foundCustomer = CustomerRepository.find('123');
+      expect(customer).toBe(foundCustomer);
+    });
+  });
+});
```

Then, we can simply update `Order` to resolve its `Customer` from the repository:

```diff
@@ -1,13 +1,12 @@
-import { Customer } from '../customer';
-
 export class Order {
   constructor(data) {
     this._number = data.number;
-    this._customer = new Customer(data.customer);
+    this._customer = data.customer;
+    this._customerRepository = data.customerRepository;
     // load other data
   }
   get customer() {
-    return this._customer;
+    return this._customerRepository.find(this._customer);
   }
 }

diff --git a/src/order/index.test.js b/src/order/index.test.js
@@ -1,8 +1,16 @@
+import { CustomerRepository } from '../customer-repository';
 import { Order } from './index';
-
 describe('Order', () => {
   it('should have a customer', () => {
-    const order = new Order({ number: '123', customer: '456' });
+    CustomerRepository.initialize();
+    CustomerRepository.register('456');
+
+    const order = new Order({
+      number: '123',
+      customer: '456',
+      customerRepository: CustomerRepository,
+    });
+
     expect(order.customer.id).toBe('456');
   });
 });
```

To simplify unit testing, the repository is passed down as a property to `Order`, so we can easily mock it.

### Commit history

Below there's the commit history for the steps detailed above.

| Commit SHA                                                                                                                       | Message                                              |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [cf4861d](https://github.com/kaiosilveira/change-value-to-reference-refactoring/commit/cf4861df3abdb511c74bc76ae1ac9862cdc35bcc) | introduce `CustomerRepository`                       |
| [57f2128](https://github.com/kaiosilveira/change-value-to-reference-refactoring/commit/57f21288e711501301afb1bf02fd0dc85a11ce78) | update `Order` to resolve `Customer` from repository |

For the full commit history for this project, check the [Commit History tab](https://github.com/kaiosilveira/change-value-to-reference-refactoring/commits/main).
