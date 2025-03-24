class Queue {
  constructor(name, items = []) {
    this.items = items
    this.name = name
  }

  clone() {
    return Queue(this.name, this.items)
  }

  write(write_symbol) {
    this.items.push(write_symbol)
    console.log(`Successfully pushed ${write_symbol} to queue ${this.name}`)
    return true
  }

  read(read_symbol) {
    if(this.is_empty()) {
      console.log(`Queue ${this.name} is empty`)
      return false
    }

    if(this.items.at(0) != read_symbol) {
      console.log(`Incorrect read symbol ${read_symbol} when tried to read Queue ${this.name}. In front of the queue currently is ${this.items.at(0)}`)
      return false
    }

    console.log(`Popped ${this.items.shift()} from queue ${this.name}`)
    return true
  }

  is_empty() {
    return this.items.length === 0
  }

  peek() {
    if(this.is_empty()) {
      console.log(`Queue ${this.name} is empty`)
    }
    
    return this.items
  }

  peek_next() {
    if(this.is_empty()) {
      console.log(`Queue ${this.name} is empty`)
      return null
    }
    return this.items[0]
  }

  size() {
    return this.items.length
  }

  log() {
    console.log(`Queue ${this.name} content: ${this.items.join("-->")}`)
  }

  get_name() {
    return this.name
  }

  get_content() {
    this.log()
    return this.items.join("-->")
  }

  get_type() {
    return "Queue"
  }
}

export default Queue