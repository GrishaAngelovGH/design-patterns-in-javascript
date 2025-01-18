/*
  Decouples an abstraction from its implementation so that the two can vary independently.
*/

class BasicConfiguration {
  setup() {
    console.log('Setting up with basic configuration...')
  }
}

class AdvancedConfiguration {
  setup() {
    console.log('Setting up with advanced configuration...')
  }
}

class DeviceConfigurator {
  constructor(configuration) {
    this.configuration = configuration
  }

  configure() {
    this.configuration.setup()
  }
}

const basicConfigurator = new DeviceConfigurator(new BasicConfiguration())
basicConfigurator.configure() // Output: Setting up with basic configuration...

const advancedConfigurator = new DeviceConfigurator(new AdvancedConfiguration())
advancedConfigurator.configure() // Output: Setting up with advanced configuration...