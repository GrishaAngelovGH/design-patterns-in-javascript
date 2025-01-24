/*
  The Chain of Responsibility is a design pattern that allows an object to 
  pass a command or action along a chain of potential handlers until 
  the command is handled. Each handler in the chain has the opportunity 
  to process the action or pass it to the next handler.
*/

class ConsoleLogger {
  setNext(logger) {
    this.nextLogger = logger
    return logger
  }

  log(message) {
    console.log(`ConsoleLogger: ${message}`)

    if (this.nextLogger) {
      this.nextLogger.log(message)
    }
  }
}

class FileLogger {
  setNext(logger) {
    this.nextLogger = logger
    return logger
  }

  log(message) {
    console.log(`FileLogger: ${message}`)

    if (this.nextLogger) {
      this.nextLogger.log(message)
    }
  }
}

const consoleLogger = new ConsoleLogger()
const fileLogger = new FileLogger()

consoleLogger.setNext(fileLogger)

consoleLogger.log('This is an info message.')

// Output:
// ConsoleLogger: This is an info message.
// FileLogger: This is an info message.