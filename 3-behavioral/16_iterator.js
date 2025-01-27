/*
  The Iterator Pattern is a design pattern that provides
  a way to access the elements of an aggregate object
  sequentially without exposing its underlying representation.
  It allows you to traverse a collection, such as a list or an array, 
  in a consistent way, regardless of the collection's implementation details.
*/

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class ProductIterator {
  constructor(products) {
    this.products = products
    this.index = 0
  }

  hasNext() {
    return this.index < this.products.length
  }

  next() {
    if (this.hasNext()) {
      return this.products[this.index++]
    }
    return null
  }
}

class ProductCollection {
  constructor(products) {
    this.products = products
  }

  createIterator() {
    return new ProductIterator(this.products)
  }
}

const products = [
  new Product('Laptop', 1000),
  new Product('Smartphone', 700),
  new Product('Tablet', 500),
]

const productCollection = new ProductCollection(products)
const iterator = productCollection.createIterator()

while (iterator.hasNext()) {
  const product = iterator.next()
  console.log(`${product.name}: $${product.price}`)
}

// Output:
// Laptop: $1000     
// Smartphone: $700             
// Tablet: $500   