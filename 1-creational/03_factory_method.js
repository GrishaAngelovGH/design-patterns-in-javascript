/*
  Defines an interface for creating an object,
  but lets subclasses alter the type of objects that will be created.

  The Factory Method pattern can be seen as a more focused and simplified
  version of the Abstract Factory pattern.
*/

class Product {
  constructor(productName, price, countryOfOrigin) {
    this.productName = productName
    this.price = price
    this.countryOfOrigin = countryOfOrigin
  }
}

class ChinaProductFactory {
  createProduct(productName, price) {
    return new Product(productName, price, 'China')
  }
}

const productFactory = new ChinaProductFactory()

const product = productFactory.createProduct('Smartphone', 499.99)

console.log(product)

/*
Product {
  productName: 'Smartphone',
  price: 499.99,
  countryOfOrigin: 'China'
}
*/