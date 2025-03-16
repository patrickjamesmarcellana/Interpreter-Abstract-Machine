class State {
  constructor(name, is_initial=false, is_final=false, transitions, is_accept=false, is_reject=false, destination_state=null) {
    this.name = name
    this.is_initial = is_initial
    this.is_final = is_final
    this.transitions = []
    this.is_accept = is_accept
    this.is_reject= is_reject
    this.destination_state = destination_state
  }
}