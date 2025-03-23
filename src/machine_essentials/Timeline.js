class Timeline {

  constructor(steps_list = [], is_accepted = false, is_dead = false) {
    this.steps_list = steps_list
    this.is_accepted = is_accepted
    this.is_dead = is_dead
  }

  clone() {
    return new Timeline(this.steps_list.map(step => step.clone()), this.is_accepted, this.is_dead)
  }

  destroy_timeline() {
    for(let step of this.steps_list) {
      step = null
    }
  }

  add_step(step) {
    this.steps_list.push(step)
  }

  get_last_step() {
    return this.steps_list.at(-1)
  }

  set_is_accepted() {
    this.is_accepted = true
  }

  set_is_dead() {
    this.is_dead = true
  }
}

export default Timeline