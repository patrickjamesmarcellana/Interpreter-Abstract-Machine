class Queue {
  constructor(name) {
    this.items = []
    this.name = name
  }

  write(write_symbol) {
    this.items.push(write_symbol)
    console.log(`Successfully pushed ${write_symbol} to queue ${this.name}`)
    return true
  }

  read() {
    if(this.is_empty()) {
      console.log(`Queue ${this.name} is empty`)
      return false
    }

    console.log(`Popped ${this.items.shift()} from the queue ${this.name}`)
    return true
  }

  is_empty() {
    return this.items.length === 0
  }

  peek() {
    if(this.is_empty()) {
      console.log("Queue is empty")
    }
    return this.items
  }

  peek_in_front() {
    if(this.is_empty()) {
      console.log("Stack is empty")
      return null
    }
    return this.items[0]
  }

  size() {
    return this.items.length
  }

  log_queue() {
    console.log(this.items.join("-->"))
  }
}

export default Queue