/*
  The Memento Pattern is a design pattern that provides 
  the ability to restore an object to its previous state without 
  revealing the details of its implementation. 
  It's useful when you want to implement undo or rollback functionality in an application.
*/

class Memento {
  constructor(text) {
    this.text = text
  }
}

class TextEditor {
  constructor() {
    this.word = ''
  }

  type(word) {
    this.word += ` ${word}`
  }

  save() {
    return new Memento(this.word)
  }

  restore(memento) {
    this.word = memento.text
  }
}

class History {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }
}

const textEditor = new TextEditor()
const history = new History()

textEditor.type('Hello, John!')

history.add(textEditor.save())

textEditor.type('How are you?')

history.add(textEditor.save())

console.log(textEditor.word)

textEditor.restore(history.items[0])

console.log(textEditor.word)