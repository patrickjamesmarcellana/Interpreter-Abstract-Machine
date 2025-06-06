class Stack {
  constructor(name, items = []) {
    this.items = items
    this.name = name
  }

  clone() {
    const curr_stack = this.items
    const cloned_stack = curr_stack.slice()
    return new Stack(this.name, cloned_stack)
  }

  write(write_symbol) {
    this.items.push(write_symbol)
    console.log(`Successfully pushed ${write_symbol} to stack ${this.name}`)
    return true
  }

  read(read_symbol) {
    if(this.is_empty()) {
      console.log(`Stack ${this.name} is empty`)
      return false
    }

    if(this.items.at(this.items.length - 1) != read_symbol) {
      console.log(`Incorrect read symbol ${read_symbol} when tried to read stack ${this.name}. Top of the stack currently is ${this.items.at(this.items.length - 1)}`)
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

  get_name() {
    return this.name
  }

  get_content() {
    this.log()
    return <div className=""><span className="text-red-700">[Bottom]&nbsp;</span>{this.items.join(" ")}<span className="text-red-700">&nbsp;[Top]</span></div>
  }

  get_type() {
    return "Stack"
  }
}

export default Stack
