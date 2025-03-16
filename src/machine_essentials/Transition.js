class Transition {

  /**
   * 
   * @param {function from TransitionList} action 
   * @param {State} destination_state 
   */
  constructor(action) {
    this.action = action
  }

  set_destination_state(destination_state) {
    this.destination_state = destination_state
  }
}

export default Transition