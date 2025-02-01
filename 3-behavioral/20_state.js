/*
  The State Pattern allows an object to change its behavior when its internal state changes. 
  It encapsulates state-specific behavior into separate classes, 
  making the code cleaner and easier to maintain.
*/

class OnState {
  toggle(fan) {
    console.log('Fan is turning off')
    fan.setState(new OffState())
  }
}

class OffState {
  toggle(fan) {
    console.log('Fan is turning on')
    fan.setState(new OnState())
  }
}

class Fan {
  constructor() {
    this.state = new OffState()
  }

  setState(state) {
    this.state = state
  }

  toggle() {
    this.state.toggle(this)
  }
}

const fan = new Fan()

fan.toggle() // Fan is turning on
fan.toggle() // Fan is turning off
fan.toggle() // Fan is turning on