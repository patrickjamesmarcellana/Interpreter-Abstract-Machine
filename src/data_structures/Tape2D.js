class Tape2D {
  constructor(name, is_input_tape) {
    this.name = name
    this.head = this.get_key(0, 0)
    this.tape = new Map()
    this.blank_symbol = '#'
    this.is_input_tape = is_input_tape

    this.initialize()
  }

  get_key(x, y) {
    return `${x},${y}`
  }

  parse_key(str) {
    return str.split(",").map(Number);
  }

  initialize() {
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
      
      console.log("Successfully performed the right operation")
      return true
    } else {
      console.log("Incorrect read symbol to the right of the tape head")
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
      
      console.log("Successfully performed the left operation")
      return true
    } else {
      console.log("Incorrect read symbol to the left of the tape head")
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
      
      console.log("Successfully performed the up operation")
      return true
    } else {
      console.log("Incorrect read symbol above the tape head")
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
      
      console.log("Successfully performed the down operation")
      return true
    } else {
      console.log("Incorrect read symbol below the tape head")
      return false
    }
  }

  print_tape() {
    // const coordinates = [...this.tape.keys()].map(key => key.match(/-?\d+/g).map(Number));
    const coordinates = [...this.tape.keys()].map(key => key.split(",").map(Number))
    console.log("Coordinates: " + coordinates)
    const xs = coordinates.map(([x, _]) => x)
    console.log("xs: " + xs)
    const ys = coordinates.map(([_, y]) => y)
    console.log("ys: " + ys)

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
    
    console.log(tape)
  }

  print_keys() {
    const sortedKeys = [...this.tape.keys()]
      .map(key => key.split(",").map(Number))
      .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    sortedKeys.forEach(([x, y]) => console.log(`(${x}, ${y}) -> ${this.tape.get(this.get_key(x, y))}`));
  }

  print_head() {
    console.log(this.head)
  }
}

export default Tape2D