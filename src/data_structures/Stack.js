class Stack {
  constructor() {
    this.items = []
  }

  write(memory_object) {
    this.items.push(memory_object)
  }

  read() {
    if(this.is_empty()) {
      return "Stack is empty"
    }

    return  this.items.pop()
  }

  peek() {
    if(this.is_empty()) {
      return "Stack is empty"
    }
    return this.items
  }

  peek_on_top() {
    if(this.is_empty()) {
      return "Stack is empty"
    }
    return this.items[this.items.length - 1]
  }

  is_empty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  log_stack() {
    console.log(this.items)
  }
}

export default Stack
