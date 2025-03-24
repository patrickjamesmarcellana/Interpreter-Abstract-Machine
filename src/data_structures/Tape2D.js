class Tape2D {
  constructor(name, head = this.get_key(0, 0), tape = new Map(), is_input_tape = false) {
    this.name = name
    this.head = head
    this.tape =tape
    this.blank_symbol = '#'
    this.is_input_tape = is_input_tape
    // this.initialize()
  }
  
  clone() {
    return new Tape2D(this.name, this.head, this.tape, this.is_input_tape)
  }

  get_key(x, y) {
    return `${x},${y}`
  }

  parse_key(str) {
    return str.split(",").map(Number);
  }

  set_as_input_tape() {
    this.is_input_tape = true
  }

  initialize() {
    // initialize input here if is_input_tape = true
    this.tape.set(this.head, this.blank_symbol)
  }

  right(read_symbol, write_symbol) {
    const parsed_head = this.parse_key(this.head)
    const right_key = this.get_key(parsed_head[0] + 1, parsed_head[1])

    // check if the node to the right exists
    if(!this.tape.has(right_key) && read_symbol === this.blank_symbol) {
      this.tape.set(right_key, this.blank_symbol)
    }

    if(this.tape.get(right_key) === read_symbol) {
      // overwrite symbol to the right
      this.tape.set(right_key, write_symbol)

      // move to the right of the input head
      this.head = right_key
      
      console.log(`Successfully read ${read_symbol} and wrote ${write_symbol} with the right operation on the 2D tape ${this.name}`)
      return true
    } else {
      console.log(`Incorrect read symbol ${read_symbol} to the right of the tape head of the 2d tape ${this.name}`)
      return false
    }
  }

  left(read_symbol, write_symbol) {
    const parsed_head = this.parse_key(this.head)
    const left_key = this.get_key(parsed_head[0] - 1, parsed_head[1])

    // check if the node to the left exists
    if(!this.tape.has(left_key) && read_symbol === this.blank_symbol) {
      this.tape.set(left_key, '#')
    }

    if(this.tape.get(left_key) === read_symbol) {
      // overwrite symbol to the left
      this.tape.set(left_key, write_symbol)

      // move to the left of the input head
      this.head = left_key
      
      console.log(`Successfully read ${read_symbol} and wrote ${write_symbol} with the left operation on the 2D tape ${this.name}`)
      return true
    } else {
      console.log(`Incorrect read symbol ${read_symbol} to the left of the tape head of the 2d tape ${this.name}`)
      return false
    }
  }

  up(read_symbol, write_symbol) {
    const parsed_head = this.parse_key(this.head)
    const up_key = this.get_key(parsed_head[0], parsed_head[1] - 1)

    // check if the node above exists
    if(!this.tape.has(up_key) && read_symbol === this.blank_symbol) {
      this.tape.set(up_key, '#')
    }

    if(this.tape.get(up_key) === read_symbol) {
      // overwrite symbol above
      this.tape.set(up_key, write_symbol)

      // move to the left of the input head
      this.head = up_key
      
      console.log(`Successfully read ${read_symbol} and wrote ${write_symbol} with the up operation on the 2D tape ${this.name}`)
      return true
    } else {
      console.log(`Incorrect read symbol ${read_symbol} above tape head of the 2d tape ${this.name}`)
      return false
    }
  }

  down(read_symbol, write_symbol) {
    const parsed_head = this.parse_key(this.head)
    const down_key = this.get_key(parsed_head[0], parsed_head[1] + 1)

    // check if the node below exists
    if(!this.tape.has(down_key) && read_symbol === this.blank_symbol) {
      this.tape.set(down_key, '#')
    }

    if(this.tape.get(down_key) === read_symbol) {
      // overwrite symbol below
      this.tape.set(down_key, write_symbol)

      // move to the left of the input head
      this.head = down_key
      
      console.log(`Successfully read ${read_symbol} and wrote ${write_symbol} with the down operation on the 2D tape ${this.name}`)
      return true
    } else {
      console.log(`Incorrect read symbol ${read_symbol} below tape head of the 2d tape ${this.name}`)
      return false
    }
  }

  print_tape() {
    const coordinates = [...this.tape.keys()].map(key => key.split(",").map(Number))
    // console.log("Coordinates: " + coordinates)
    const xs = coordinates.map(([x, _]) => x)
    // console.log("xs: " + xs)
    const ys = coordinates.map(([_, y]) => y)
    // console.log("ys: " + ys)

    const min_x = Math.min(...xs), max_x = Math.max(...xs)
    const min_y = Math.min(...ys), max_y = Math.max(...ys)

    let tape = ""
    for (let y = min_y; y <= max_y; y++) {
      let row = "";
      for (let x = min_x; x <= max_x; x++) {
        if(!this.tape.has(this.get_key(x, y))) {
          row += "# "
        } else{
          row += this.tape.get(this.get_key(x, y)) + " "
        }
      }
      tape += row + "\n"
    }
    
    console.log(`Content of the 2d tape ${this.name}:\n${tape}`)
  }

  print_keys() {
    const sortedKeys = [...this.tape.keys()]
      .map(key => key.split(",").map(Number))
      .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    const keys = []

    sortedKeys.forEach(([x, y]) => keys.push(`(${x}, ${y}) -> ${this.tape.get(this.get_key(x, y))}`));
    console.log(`Keys of the 2d tape ${this.name}:\n${keys}`)
  }

  print_head() {
    console.log(`Head of the 2d tape ${this.name}: ${this.head}`)
  }

  get_name() {
    return this.name
  }

  get_content() {
    this.print_tape()
    this.print_head()
    return this.tape
  }

  get_head() {
    return this.head
  }

  get_type() {
    return "2D Tape"
  }
}

export default Tape2D