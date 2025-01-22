/*
  Reduces the cost of creating and manipulating a large number of similar objects.

  The Flyweight pattern is a structural design pattern used to minimize memory
  usage and improve performance by sharing as much data as possible with similar objects.
  It is particularly useful when you need to create a large number of similar objects.

  The essence of the Flyweight pattern lies in using a separate abstraction (like a factory)
  to manage and share instances of objects efficiently.
*/

class Sensor {
  constructor(type, unit) {
    this.type = type
    this.unit = unit
  }

  report(value, room) {
    console.log(`${this.type} sensor in ${room}: ${value} ${this.unit}`)
  }
}

class SensorFactory {
  constructor() {
    this.sensors = {}
  }

  getSensor(type, unit) {
    if (!this.sensors[`${type}-${unit}`]) {
      this.sensors[`${type}-${unit}`] = new Sensor(type, unit)
    }
    return this.sensors[`${type}-${unit}`]
  }
}

class SmartHome {
  constructor() {
    this.sensorFactory = new SensorFactory()
  }

  installSensor(type, unit) {
    this.sensorFactory.getSensor(type, unit)
  }

  report(type, unit, value, room) {
    const sensor = this.sensorFactory.getSensor(type, unit)
    sensor.report(value, room)
  }
}

const smartHome = new SmartHome()

smartHome.installSensor('Temperature', 'Celsius')
smartHome.installSensor('Humidity', '%')

smartHome.report('Temperature', 'Celsius', 26, 'Living Room') // Temperature sensor in Living Room: 26 Celsius
smartHome.report('Humidity', '%', 18, 'Kitchen') // Humidity sensor in Kitchen: 18 %