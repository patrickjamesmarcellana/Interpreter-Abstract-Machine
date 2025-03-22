class Timeline {
  constructor() {
    this.steps_list = []
    this.is_accepted = false
    this.is_dead = false
  }

  add_step(step) {
    this.steps_list.add(step)
  }
}