/*
  Composes objects into tree structures to represent part-whole hierarchies.

  The Composite pattern allows you to build complex structures from simple parts
  and treat them all the same way. Think of it like a tree structure where you
  can have branches (composites) and leaves (simple parts), and you can interact
  with both branches and leaves using the same methods.
*/

class Camera {
  constructor(name) {
    this.name = name
  }

  configure() {
    return `Configuring camera: ${this.name}`
  }
}

class Sensor {
  constructor(name) {
    this.name = name
  }

  configure() {
    return `Configuring sensor: ${this.name}`
  }
}

class SmartDevice {
  constructor(name) {
    this.name = name
    this.children = []
  }

  add(device) {
    this.children.push(device)
  }

  configure() {
    return this.children.map(child => child.configure()).join('\n')
  }
}

const camera = new Camera('Camera')
const sensor = new Sensor('Sensor')

const smartDevice = new SmartDevice('SmartDevice')

smartDevice.add(camera)
smartDevice.add(sensor)

console.log(smartDevice.configure())
// Output:
// Configuring camera: Camera
// Configuring sensor: Sensor