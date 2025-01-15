/*
  The Prototype pattern is used to create new objects by copying an existing object,
  rather than creating a new instance from scratch.
*/

class Product {
  constructor(productName, price) {
    this.productName = productName
    this.price = price
  }

  clone() {
    // Gets the prototype of the current object and creates a new object with the same prototype
    return { ...Object.create(Object.getPrototypeOf(this)), ...this }

    // return { ...this } // will not preserve the prototype chain of the original object
  }
}

const product1 = new Product('Ice Cream', 1.50)
const product2 = product1.clone()
console.log(product2) // { productName: 'Ice Cream', price: 1.5 }