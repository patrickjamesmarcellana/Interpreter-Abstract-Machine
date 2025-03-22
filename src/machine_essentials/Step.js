// Each timeline must have their own copy of all memory
// Each timeline must have their own copy of the input tape

class Step {
  constructor(curr_state, input_tape=null, memory_structures_map=null, output_tape=null, is_accepted=false, is_dead=false) {
    this.curr_state = curr_state
    this.input_tape = input_tape
    this.output_tape = output_tape
    this.memory_structures_map = memory_structures_map
    this.is_accepted = false
    this.is_dead = false
  }

  get_curr_state() {
    return this.curr_state
  }
}

export default Step