class InputTape {
  constructor(name, head = 0, tape = []) {
    this.name = name
    this.head = head
    this.tape = tape
    this.blank_symbol = '#'
  }

  clone() {
    const curr_tape = this.tape
    const cloned_tape = curr_tape.slice()
    return new InputTape(this.name, this.head, cloned_tape)
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

  scan_right(scan_symbol) {
    console.log("TAPE PRINTING 1")
    console.log(this.tape[this.head + 1])

    const right_key = this.head + 1

    if(right_key >= this.tape.length) {
      console.log(`Cannot scan right further on input tape ${this.name}`)
      return false
    }

    if(this.tape[right_key] === scan_symbol) {
      this.head = right_key
      console.log(`Successfully scanned ${scan_symbol} on input tape ${this.name}`)
      return true
    } else {
      console.log(`Incorrect scan symbol ${scan_symbol} does not match actual symbol ${this.tape[right_key]} on input tape ${this.name}`)
      return false
    }
  }

  scan_left(scan_symbol) {
    const left_key = this.head - 1

    if(left_key < 0) {
      console.log(`Cannot scan left further on input tape ${this.name}`)
      return false
    }

    if(this.tape[left_key] === scan_symbol) {
      this.head = left_key
      console.log(`Successfully scanned ${scan_symbol} on input tape ${this.name}`)
      return true
    } else {
      console.log(`Incorrect scan symbol ${scan_symbol} does not match actual symbol ${this.tape[left_key]} on input tape ${this.name}`)
      return false
    }
  }

  print_tape() {
    console.log(`Contents of input tape ${this.name}: ${this.tape}`)
  }

  print_head() {
    console.log(`Head of input tape ${this.name}: ${this.head}`)
  }

  get_name() {
    return this.name
  }

  get_content() {
    this.print_tape()
    this.print_head()
    let tape_to_return = []

    this.tape.forEach((item, index) => {
      if(index === this.head) {
        tape_to_return.push(<span className="font-extrabold">{item}&nbsp;</span>)
      } else {
        tape_to_return.push(<span className="">{item}&nbsp;</span>)
      }
    })

    return <div>{tape_to_return}</div>
  }

  get_type() {
    return "Input Tape"
  }

  get_head() {
    return this.head
  }

  is_complete() {
    if(this.head === this.tape.length - 1) {
      console.log(`Input tape ${this.name} complete`)
      return true
    } else {
      console.log(`Input tape ${this.name} incomplete`)
      return false
    }
  }
}

export default InputTape