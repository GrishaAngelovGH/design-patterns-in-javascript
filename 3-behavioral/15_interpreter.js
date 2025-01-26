/*
  While it is commonly used for interpreting languages or formal grammars, 
  it can be applied to a variety of other scenarios that require interpreting
  expressions or defining operations.
*/

class CategoryExpression {
  constructor(category) {
    this.category = category
  }

  interpret(products) {
    return products.filter(product => product.category === this.category)
  }
}

class PriceRangeExpression {
  constructor(minPrice, maxPrice) {
    this.minPrice = minPrice
    this.maxPrice = maxPrice
  }

  interpret(products) {
    return products.filter(product => product.price >= this.minPrice && product.price <= this.maxPrice)
  }
}

class Product {
  constructor(productName, category, price) {
    this.productName = productName
    this.category = category
    this.price = price
  }
}

const products = [
  new Product('Laptop', 'Electronics', 1000),
  new Product('Smartphone', 'Electronics', 700),
  new Product('Table', 'Furniture', 150),
  new Product('Chair', 'Furniture', 85),
  new Product('Headphones', 'Electronics', 150),
]

const electronicsCategory = new CategoryExpression('Electronics')
const priceRange = new PriceRangeExpression(100, 800)

const filteredByCategory = electronicsCategory.interpret(products)
const filteredByPrice = priceRange.interpret(filteredByCategory)

console.log('Filtered Products:')
filteredByPrice.forEach(product => console.log(`${product.productName}, ${product.category}, $${product.price}`))

/*
Filtered Products:
Smartphone, Electronics, $700
Headphones, Electronics, $150   
*/