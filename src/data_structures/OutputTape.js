class OutputTape {
  constructor(name) {
    this.name = name
    this.tape = []
    this.blank_symbol = '#'
  }

  print(output_symbol) {
    this.tape.push(output_symbol)
    console.log(`Successfully printed ${output_symbol} to the output tape ${this.name}`)
  }

  print_tape() {
    console.log(`Output tape content: ${this.tape}`)
  }
}

export default OutputTape