class Timeline {

  constructor(steps_list = [], is_accepted = false, is_dead = false) {
    this.steps_list = steps_list
    this.is_accepted = is_accepted
    this.is_dead = is_dead
  }

  clone() {
    return new Timeline(this.steps_list, this.is_accepted, this.is_dead)
  }

  add_step(step) {
    this.steps_list.add(step)
  }

  get_last_step() {
    return this.steps_list.at(-1)
  }
}

export default Timeline