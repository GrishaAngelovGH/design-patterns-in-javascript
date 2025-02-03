/*
  If we have two classes with the same methods, they can follow the Template Method Pattern. 
  This pattern allows the parent class to define the skeleton of the algorithm
  and rely on the subclasses to implement the specific steps.
*/

const CSVProcessor = {
  readData() {
    console.log('Reading CSV data')
  },
  parseData() {
    console.log('Parsing CSV data')
  }
}

const JSONProcessor = {
  readData() {
    console.log('Reading JSON data')
  },
  parseData() {
    console.log('Parsing JSON data')
  }
}

class SaveData {
  saveData() {
    console.log('Saving data to database')
  }
}

class DataProcessor {
  constructor(processor, saveData) {
    this.processor = processor
    this.saveData = saveData
  }

  process() {
    this.processor.readData()
    this.processor.parseData()
    this.saveData.saveData()
  }
}

const csvProcessor = new DataProcessor(CSVProcessor, new SaveData())
csvProcessor.process()
// Output: 
// Reading CSV data
// Parsing CSV data
// Saving data to database

const jsonProcessor = new DataProcessor(JSONProcessor, new SaveData())
jsonProcessor.process()
// Output: 
// Reading JSON data
// Parsing JSON data
// Saving data to database