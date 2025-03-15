class Input_Tape {
  constructor(name, true_input) {
    this.name = name
    this.head = 0
    this.tape = []
    this.blank_symbol = '#'

    this.initialize(true_input)
  }

  initialize(true_input) {
    // place the true input on the current tape
    this.tape.push(this.blank_symbol)
    const input_arr = true_input.split('')
    for(let char of input_arr) {
      this.tape.push(char)
    }
    this.tape.push(this.blank_symbol)
  }

  scan(scan_symbol) {
    const right_key = this.head + 1

    if(this.tape[right_key] === scan_symbol) {
      // correct scan symbol
      this.head = right_key
      console.log(`Successfully scanned ${scan_symbol}`)
      return true
    } else {
      console.log(`Incorrect scan symbol ${scan_symbol} does not match actual symbol ${this.tape[right_key]}`)
      return false
    }
  }

  print_tape() {
    console.log(this.tape)
  }

  print_head() {
    console.log(this.head)
  }

  is_complete() {
    if(this.head === this.tape.length - 1) {
      console.log("Input complete")
      return true
    } else {
      console.log("Input incomplete")
      return false
    }
  }
}

export default Input_Tape