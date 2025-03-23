class State {

  /**
   * 
   * @param {String} name 
   * @param {boolean} is_initial 
   * @param {Transition[]} transitions 
   * @param {boolean} is_accept 
   * @param {boolean} is_reject 
   */
  constructor(name, is_initial=false, is_accept=false, is_reject=false) {
    this.name = name
    this.is_initial = is_initial
    this.transitions = []
    this.is_accept = is_accept
    this.is_reject= is_reject
  }

  /**
   * 
   * @param {Transition} transition 
   */
  add_transition(transition) {
    this.transitions.push(transition)
  }

  get_transitions() {
    return this.transitions
  }

  is_accept_state() {
    return this.is_accept
  }

  is_reject_state() {
    return this.is_reject
  }
}

export default State