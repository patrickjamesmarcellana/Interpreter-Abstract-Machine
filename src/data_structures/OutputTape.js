class OutputTape {
  constructor(name) {
    this.name = name
    this.tape = []
    this.blank_symbol = '#'
  }

  constructor(name, tape) {
    this.name = name
    this.tape = tape
    this.blank_symbol = '#'
  }

  print(output_symbol) {
    this.tape.push(output_symbol)
    console.log(`Successfully printed ${output_symbol} to the output tape ${this.name}`)
  }

  print_tape() {
    console.log(`Output tape ${this.name} content: ${this.tape}`)
  }
}

export default OutputTape