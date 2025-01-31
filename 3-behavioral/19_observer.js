/*
  The Observer Pattern is a design pattern that establishes a one-to-many relationship 
  between objects so that when one object (the subject) changes state, 
  all its dependents (observers) are notified and updated automatically.
*/

class Stock {
  constructor() {
    this.observers = []
    this.price = 0
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.price))
  }

  setPrice(newPrice) {
    console.log(`Stock price updated to: $${newPrice}`)
    this.price = newPrice
    this.notifyObservers()
  }
}

class Investor {
  constructor(name) {
    this.name = name
  }

  update(stockPrice) {
    console.log(`${this.name} notified of stock price change: $${stockPrice}`)
  }
}

const stock = new Stock()

const investor1 = new Investor("Alice")
const investor2 = new Investor("Bob")

stock.addObserver(investor1)
stock.addObserver(investor2)

stock.setPrice(100)

stock.setPrice(120)

stock.removeObserver(investor2)
stock.setPrice(140)

/*
Stock price updated to: $100                                                             
Alice notified of stock price change: $100     
Bob notified of stock price change: $100                 
Stock price updated to: $120                            
Alice notified of stock price change: $120                                                                                         
Bob notified of stock price change: $120
Stock price updated to: $140
Alice notified of stock price change: $140
*/