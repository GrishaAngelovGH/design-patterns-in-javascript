/*
  The Decorator pattern allows you to dynamically add behavior
  to objects without altering their structure. 
  This pattern is particularly useful for extending functionalities of
  classes in a flexible and reusable way.
*/

class Device {
  constructor(deviceName) {
    this.deviceName = deviceName
  }

  operate() {
    return `${this.deviceName} is operating`
  }
}

class LoggingDecorator {
  constructor(device) {
    this.device = device
  }

  operate() {
    const result = this.device.operate()
    console.log(`Logging: ${result}`)
    return result
  }

  get deviceName() {
    return this.device.deviceName
  }
}

class SecurityDecorator {
  constructor(device) {
    this.device = device
  }

  operate() {
    console.log(`Performing security check for: ${this.device.deviceName}`)
    return this.device.operate()
  }

  get deviceName() {
    return this.device.deviceName
  }
}

// By adding a get deviceName() method to each decorator, 
// we ensure that the original device's name property is accessible through the chain of decorators.
// This way, the SecurityDecorator can correctly reference the device's name.

// The get keyword in JavaScript is used to define a getter method for an object. 
// Getter methods are a way to define a property that is computed or retrieved 
// dynamically when accessed, instead of being stored directly in the object. 
// This allows for more flexible and controlled access to object properties.

const basicDevice = new Device('Basic Device')

const loggingDevice = new LoggingDecorator(basicDevice)

const secureLoggingDevice = new SecurityDecorator(loggingDevice)

console.log(secureLoggingDevice.operate())

// Output:
// Performing security check for: Basic Device
// Logging: Basic Device is operating
// Basic Device is operating