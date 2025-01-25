/*
  The Command Pattern is a way to convert a request or action into a separate object. 
  This approach allows you to handle different actions uniformly.
*/

class Calculator {
  constructor() {
    this.result = 0
  }

  execute(command) {
    this.result = command.execute(this.result)
    return this
  }

  getResult() {
    return this.result
  }
}

class AdditionCommand {
  constructor(value) {
    this.value = value
  }

  execute(accumulatedValue) {
    return accumulatedValue + this.value
  }
}

class MultiplicationCommand {
  constructor(value) {
    this.value = value
  }

  execute(accumulatedValue) {
    return accumulatedValue * this.value
  }
}

const calculator = new Calculator()

const additionCommand1 = new AdditionCommand(5)
const additionCommand2 = new AdditionCommand(10)
const multiplicationCommand = new MultiplicationCommand(2)

const result = calculator
  .execute(additionCommand1)
  .execute(additionCommand2)
  .execute(multiplicationCommand)
  .getResult()

console.log(result) // 30