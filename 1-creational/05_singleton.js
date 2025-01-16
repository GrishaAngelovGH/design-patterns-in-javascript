/*
  Ensures a class has only one instance and provides a global point of access to it.
*/

class DeviceConfigurator {
  constructor() {
    this.config = {}
  }

  static getInstance() {
    if (!DeviceConfigurator.instance) {
      DeviceConfigurator.instance = new DeviceConfigurator()
    }

    return DeviceConfigurator.instance
  }

  applyConfig(key, value) {
    this.config[key] = value
  }

  getConfig(key) {
    return this.config[key]
  }
}

const deviceConfigurator1 = DeviceConfigurator.getInstance()
const deviceConfigurator2 = DeviceConfigurator.getInstance()

deviceConfigurator1.applyConfig('resolution', '1080p')
console.log(deviceConfigurator2.getConfig('resolution')) // 1080p
console.log(deviceConfigurator1 === deviceConfigurator2) // true