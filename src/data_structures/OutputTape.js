class OutputTape {
  constructor(name) {
    this.name = name
    this.tape = []
    this.blank_symbol = '#'
  }

  print(output_symbol) {
    this.tape.push(output_symbol)
  }

  print_tape() {
    console.log(this.tape)
  }
}

export default OutputTape