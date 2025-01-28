/*
  The Mediator Pattern is a design pattern that promotes loose coupling
  by preventing objects from communicating directly with each other. 
  Instead, they communicate through a mediator object, which coordinates 
  the interactions between them. This pattern simplifies the communication
  between objects in a system, making it easier to manage and maintain.
*/

class SmartHomeMediator {
  constructor() {
    this.devices = []
  }

  registerDevice(device) {
    this.devices.push(device)
  }

  sendMessage(message, device) {
    this.devices.forEach(d => {
      if (d !== device) {
        d.receive(message)
      }
    })
  }
}

class Light {
  constructor(name, mediator) {
    this.name = name
    this.mediator = mediator
  }

  send(message) {
    console.log(`${this.name} sends: ${message}`)
    this.mediator.sendMessage(message, this)
  }

  receive(message) {
    console.log(`${this.name} receives: ${message}`)
  }
}

class Thermostat {
  constructor(name, mediator) {
    this.name = name
    this.mediator = mediator
  }

  send(message) {
    console.log(`${this.name} sends: ${message}`)
    this.mediator.sendMessage(message, this)
  }

  receive(message) {
    console.log(`${this.name} receives: ${message}`)
  }
}

const mediator = new SmartHomeMediator()

const light = new Light('Living Room Light', mediator)
const thermostat = new Thermostat('Home Thermostat', mediator)

mediator.registerDevice(light)
mediator.registerDevice(thermostat)

light.send('Turning on the light.')
thermostat.send('Setting temperature to 22°C.')

/*
Living Room Light sends: Turning on the light.                                           
Home Thermostat receives: Turning on the light.
Home Thermostat sends: Setting temperature to 22°C.
Living Room Light receives: Setting temperature to 22°C.
*/