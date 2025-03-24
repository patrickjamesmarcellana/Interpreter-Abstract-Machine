class OutputTape {
  constructor(name, tape = []) {
    this.name = name
    this.tape = tape
    this.blank_symbol = '#'
  }

  clone() {
    return new OutputTape(this.name, this.tape)
  }

  print(output_symbol) {
    this.tape.push(output_symbol)
    console.log(`Successfully printed ${output_symbol} to the output tape ${this.name}`)
  }

  print_tape() {
    console.log(`Output tape ${this.name} content: ${this.tape}`)
  }

  get_name() {
    return this.name
  }

  get_content() {
    this.print_tape()
    return this.tape.join(" ")
  }

  get_type() {
    return "Output Tape"
  }
}

export default OutputTape