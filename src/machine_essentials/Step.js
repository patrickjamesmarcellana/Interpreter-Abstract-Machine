// Each timeline must have their own copy of all memory
// Each timeline must have their own copy of the input tape

class Step {
  constructor(curr_state, memory_objects=null) {
    this.curr_state = curr_state
    this.memory_objects = memory_objects
  }

  clone() {
    return new Step(this.curr_state, this.memory_objects, this.is_accepted, this.is_dead)
  }

  get_curr_state() {
    return this.curr_state
  }

  get_memory_objects() {
    return this.memory_objects
  }
}

export default Step