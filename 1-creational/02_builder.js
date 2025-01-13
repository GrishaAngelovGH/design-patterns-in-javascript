/*
  Separates the construction of a complex object from its representation, 
  allowing the same construction process to create different representations.
*/

class Product {
  constructor(productName, price) {
    this.productName = productName
    this.price = price
  }
}

class ProductBuilder {
  constructor() {
    this.productName = '::productName::'
    this.price = 1.00
  }

  withProductName(productName) {
    this.productName = productName
    return this
  }

  withPrice(price) {
    this.price = price
    return this
  }

  build() {
    return new Product(this.productName, this.price)
  }
}

const productBuilder = new ProductBuilder()

const defaultProduct = productBuilder.build()

const customProduct = productBuilder
  .withProductName('Smartphone')
  .withPrice(499.99)
  .build()

console.log(defaultProduct) // Product { productName: '::productName::', price: 1 }
console.log(customProduct) // Product { productName: 'Smartphone', price: 499.99 }