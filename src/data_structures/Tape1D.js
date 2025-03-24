class Tape1D {
  constructor(name, head = 0, tape = new Map(), is_input_tape = false) {
    this.name = name
    this.head = head
    this.tape = tape
    this.blank_symbol = '#'
    this.is_input_tape = is_input_tape
    // this.initialize()
  }

  clone() {
    return new Tape1D(this.name, this.head, this.tape, this.is_input_tape)
  }

  set_as_input_tape() {
    this.is_input_tape = true
  }

  initialize(true_input) {
    // initialize input here if is_input_tape = true
    this.tape.set(this.head, this.blank_symbol)
    Array.from(true_input).forEach((char, index) => {
      this.tape.set(index + 1, char)
    })
    this.tape.set(true_input.length + 1, this.blank_symbol)
  }

  right(read_symbol, write_symbol) {
    const right_key = this.head + 1

    // check if the node to the right exists
    if(!this.tape.has(right_key) && read_symbol === this.blank_symbol) {
      this.tape.set(right_key, this.blank_symbol)
    }

    if(this.tape.get(right_key) === read_symbol) {
      // overwrite symbol to the right
      this.tape.set(right_key, write_symbol)

      // move to the right of the input head
      this.head += 1
      
      console.log(`Successfully read ${read_symbol} and wrote ${write_symbol} with the right operation on the 1D tape ${this.name}`)
      return true
    } else {
      console.log(`Incorrect read symbol ${read_symbol} to the right of the tape head of the 1d tape ${this.name}`)
      return false
    }
  }

  left(read_symbol, write_symbol) {
    const left_key = this.head - 1

    // check if the node to the left exists
    if(!this.tape.has(left_key) && read_symbol === this.blank_symbol) {
      this.tape.set(left_key, '#')
    }

    if(this.tape.get(left_key) === write_symbol) {
      // overwrite symbol to the left
      this.tape.set(left_key, write_symbol)

      // move to the left of the input head
      this.head -= 1
      
      console.log(`Successfully read ${read_symbol} and wrote ${write_symbol} with the left operation on the 1D tape ${this.name}`)
      return true
    } else {
      console.log(`Incorrect read symbol ${read_symbol} to the left of the tape head of the 1d tape ${this.name}`)
      return false
    }
  }

  print_tape() {
    const tape_in_array = [];

    // convert the tape to an array by sorting the key indices
    [...this.tape.keys()]
      .sort((a, b) => a - b) 
      .forEach(key => tape_in_array.push(this.tape.get(key)));

    console.log(`Content of the 1d tape ${this.name}:\n${tape_in_array}`)
  }

  print_keys() {
    const keys = [];
    [...this.tape.keys()]
      .sort((a, b) => a - b) 
      .forEach(key => keys.push(key));
    
    console.log(`Keys of the 1d tape ${this.name}:\n${keys}`)
  }

  print_head() {
    console.log(`Head of the 1d tape ${this.name}: ${this.head}`)
  }

  get_name() {
    return this.name
  }

  get_content() {
    this.print_tape()
    this.print_head()

    const tape_in_array = [];

    // convert the tape to an array by sorting the key indices
    [...this.tape.keys()]
      .sort((a, b) => a - b) 
      .forEach(key => tape_in_array.push(this.tape.get(key)));
    return tape_in_array.join(" ")
  }

  get_head() {
    return this.head
  }

  get_type() {
    return "1D Tape"
  }
}

export default Tape1D