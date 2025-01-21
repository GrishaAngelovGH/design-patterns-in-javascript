/*
  Provides a unified interface to a set of interfaces in a subsystem.
*/

class PDFReport {
  generate() {
    console.log('Genarating a PDF report')
  }
}

class HTMLReport {
  generate() {
    console.log('Genarating a HTML report')
  }
}

class DataReport {
  constructor(pdfReport, htmlReport) {
    this.pdfReport = pdfReport
    this.htmlReport = htmlReport
  }

  generatePDFReport() {
    this.pdfReport.generate()
  }

  generateHTMLReport() {
    this.htmlReport.generate()
  }
}

const dataReport = new DataReport(new PDFReport(), new HTMLReport())

dataReport.generatePDFReport() // Genarating a PDF report
dataReport.generateHTMLReport() // Genarating a HTML report