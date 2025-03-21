class Stack {
  constructor(name) {
    this.items = []
    this.name = name
  }

  constructor(name, items) {
    this.items = items
    this.name = name
  }

  write(write_symbol) {
    this.items.push(write_symbol)
    console.log(`Successfully pushed ${write_symbol} to stack ${this.name}`)
    return true
  }

  read() {
    if(this.is_empty()) {
      console.log(`Stack ${this.name} is empty`)
      return false
    }

    console.log(`Removed ${this.items.pop()} from the stack ${this.name}`)
    return  true
  }

  peek() {
    if(this.is_empty()) {
      console.log(`Stack ${this.name} is empty`)
    }
    return this.items
  }

  peek_next() {
    if(this.is_empty()) {
      console.log(`Stack ${this.name} is empty`)
      return null
    }
    return this.items[this.items.length - 1]
  }

  is_empty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  log() {
    console.log(`Content of stack ${this.name}: ${this.items}`)
  }
}

export default Stack
