/*
  Convert the interface of a class into another interface clients expect. 
  Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
  Useful when integrating new components into legacy systems.
*/

class OldSystem {
  oldMethod() {
    return 'old method'
  }
}

class Adapter {
  constructor(oldSystem) {
    this.oldSystem = oldSystem
  }

  newMethod() {
    return this.oldSystem.oldMethod()
  }
}

const adapter = new Adapter(new OldSystem())
console.log(adapter.newMethod()) // old method