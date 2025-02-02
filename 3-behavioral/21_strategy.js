/*
  The Strategy Pattern allows you to define a family of algorithms, 
  encapsulate each one as a separate class, and make them interchangeable. 
  This pattern lets the algorithm vary independently from the clients that use it.
  you can change the algorithm (strategy) used by the clients (objects) without modifying the clients themselves.
  In simpler terms, the behavior of the object that uses the algorithm can be altered by switching out 
  one algorithm for another. This is done without altering the object’s code.
*/

class ShoppingCart {
  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy
  }

  checkout(amount) {
    this.paymentStrategy.pay(amount)
  }
}

class CreditCardPayment {
  pay(amount) {
    console.log(`Paid ${amount} using credit card.`)
  }
}

class PayPalPayment {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal.`)
  }
}

const cart = new ShoppingCart()

cart.setPaymentStrategy(new CreditCardPayment())
cart.checkout(100) // Output: Paid 100 using credit card.

cart.setPaymentStrategy(new PayPalPayment())
cart.checkout(100) // Output: Paid 100 using PayPal.