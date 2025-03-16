class Transition {

  /**
   * 
   * @param {function from TransitionList} action 
   * @param {State} destination_state 
   */
  constructor(action, destination_state) {
    this.action = action
    this.destination_state = destination_state
  }
}

export default Transition