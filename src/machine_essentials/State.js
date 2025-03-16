class State {

  /**
   * 
   * @param {String} name 
   * @param {boolean} is_initial 
   * @param {boolean} is_final 
   * @param {Transition[]} transitions 
   * @param {boolean} is_accept 
   * @param {boolean} is_reject 
   */
  constructor(name, is_initial=false, is_final=false, transitions, is_accept=false, is_reject=false) {
    this.name = name
    this.is_initial = is_initial
    this.is_final = is_final
    this.transitions = transitions
    this.is_accept = is_accept
    this.is_reject= is_reject
  }
}

export default State