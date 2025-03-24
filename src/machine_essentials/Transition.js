class Transition {

  /**
   * 
   * @param {String} source_state_name
   * @param {function from TransitionList} action 
   * @param {String} destination_state_name 
   */
  constructor(source_state_name, memory_object_name, action, destination_state_name) {
    this.source_state_name = source_state_name
    this.memory_object_name = memory_object_name
    this.action = action
    this.destination_state_name = destination_state_name
    this.destination_state = null
  }

  set_destination_state(destination_state) {
    this.destination_state = destination_state
  }

  get_memory_object_name() {
    return this.memory_object_name
  }

  get_destination_state_name() {
    return this.destination_state_name
  }
}

export default Transition