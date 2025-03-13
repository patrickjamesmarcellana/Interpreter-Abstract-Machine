class Queue {
  constructor(name) {
    this.items = []
    this.name = name
  }

  write(memory_object) {
    this.items.push(memory_object)
  }

  read() {
    if(this.is_empty()) {
      return "Queue is empty"
    }
    return this.items.shift()
  }

  is_empty() {
    return this.items.length === 0
  }

  peek() {
    if(this.is_empty()) {
      return "Queue is empty"
    }
    return this.items
  }

  peek_in_front() {
    if(this.is_empty()) {
      return "Stack is empty"
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