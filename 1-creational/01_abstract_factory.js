/*
  Provides an interface for creating families of related or dependent objects
  without specifying their concrete classes.
*/

class Device01 {
  constructor() {
    this.deviceName = "Device01"
  }

  configure() {
    console.log(`${this.deviceName} is configuring`)
  }
}

class Device02 {
  constructor() {
    this.deviceName = "Device02"
  }

  configure() {
    console.log(`${this.deviceName} is configuring`)
  }
}

class DeviceFactory {
  createDevice(type) {
    switch (type) {
      case '01':
        return new Device01()
      case '02':
        return new Device02()
      default:
        throw new Error('Unsupported device type')
    }
  }
}

const deviceFactory = new DeviceFactory()

const device1 = deviceFactory.createDevice('01')
const device2 = deviceFactory.createDevice('02')

device1.configure() // Device01 is configuring
device2.configure() // Device02 is configuring