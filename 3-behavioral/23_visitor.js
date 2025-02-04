/*
  The Visitor pattern allows you to add new operations to objects 
  without changing their classes. It's particularly useful when you have 
  a structure of objects and want to perform various operations on them without 
  modifying their structure.
*/

class DiscountVisitor {
  visitBook(book) {
    console.log(`Applying 15% discount on book: ${book.title}`)
    return book.price * 0.85 // Customer pays 85% of the original price
  }

  visitElectronics(electronics) {
    console.log(`Applying 20% discount on electronics: ${electronics.name}`)
    return electronics.price * 0.80 // Customer pays 80% of the original price
  }
}

class Book {
  constructor(title, price) {
    this.title = title
    this.price = price
  }

  accept(visitor) {
    return visitor.visitBook(this)
  }
}

class Electronics {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  accept(visitor) {
    return visitor.visitElectronics(this)
  }
}

const cart = [
  new Book('Design Patterns', 50),
  new Electronics('Smartphone', 300)
]

const discountVisitor = new DiscountVisitor()
let totalPrice = 0

cart.forEach(item => {
  totalPrice += item.accept(discountVisitor)
})

console.log(`Total price after discount: $${totalPrice}`)

// Output:
// Applying 15% discount on book: Design Patterns
// Applying 20% discount on electronics: Smartphone
// Total price after discount: $282.5