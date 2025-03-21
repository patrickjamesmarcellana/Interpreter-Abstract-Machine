class Transition {

  /**
   * 
   * @param {String} source_state_name
   * @param {function from TransitionList} action 
   * @param {String} destination_state_name 
   */
  constructor(source_state_name, action, destination_state_name) {
    this.source_state_name = source_state_name
    this.action = action
    this.destination_state_name = destination_state_name
  }

  set_destination_state(destination_state) {
    this.destination_state = destination_state
  }
}

export default Transition