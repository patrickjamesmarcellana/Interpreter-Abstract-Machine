// Each timeline must have their own copy of all memory
// Each timeline must have their own copy of the input tape

class Step {
  constructor(curr_state, memory_objects=null, is_accepted=false, is_dead=false) {
    this.curr_state = curr_state
    this.memory_objects = memory_objects
    this.is_accepted = is_accepted
    this.is_dead = is_dead
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

  set_accepted() {
    this.is_accepted = true
  }

  set_dead() {
    this.is_dead = true
  }
}

export default Step