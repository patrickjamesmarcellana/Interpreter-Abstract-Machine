import MemoryObjects from "../data_structures/MemoryObjects.js"
import Step from "./Step.js"
import Timeline from "./Timeline.js"

class Machine {
  constructor(states_map, initial_state_name, memory_objects = new MemoryObjects(), timeline_to_display = null) {
    this.states_map = states_map
    this.initial_state_name = initial_state_name
    this.timelines = []
    this.accepted_timelines = 0
    this.rejected_timelines = 0
    this.memory_objects = memory_objects

    this.initialize()
  }

  initialize() {
    const initial_state = this.states_map.get(this.initial_state_name)
    const first_step = new Step(initial_state, this.memory_objects, false, false)
    const first_timeline = new Timeline([first_step], false, false)
    this.timelines.push(first_timeline)
  }

  run() {
    while(this.timelines.length > 0 && this.accepted_timelines === 0 && this.rejected_timelines === 0) {
      this.step()
      // add mediator here
    }

    if(this.accepted_timelines > 0) {
      console.log(this.timeline_to_display)
      return "accept"
    } 

    if(this.rejected_timelines > 0) {
      return "reject"
    }
  }

  step() {
    if(this.timelines.length <= 0) {
      return false
    }

    let new_timelines = []
    for(const timeline of this.timelines) {
      const curr_step = timeline.get_last_step()
      const curr_state = curr_step.get_curr_state()
      const memory_objects = curr_step.get_memory_objects()
      const next_transitions = curr_state.get_transitions()

      for(const next_transition of next_transitions) {
        const target_memory_object_name = next_transition.get_memory_object_name()
        const new_memory_objects = memory_objects.clone(target_memory_object_name) // clones only the target memory object
        const memory_object_to_use = new_memory_objects.get_map().get(target_memory_object_name)

        // check if the transition function will succeed
        if(next_transition.action(memory_object_to_use)) {
          new_memory_objects.upsert(memory_object_to_use.name, memory_object_to_use)
          const new_state = this.states_map.get(next_transition.get_destination_state_name())
          const new_step = new Step(new_state, new_memory_objects)
          const new_timeline = timeline.clone()
          new_timeline.add_step(new_step)

          if(new_state.is_accept_state()) {
            new_timeline.set_is_accepted()
            this.accepted_timelines += 1
          } else if(new_state.is_reject_state()) {
            new_timeline.set_is_rejected()
            this.rejected_timelines += 1
          }

          new_timelines.push(new_timeline)
        }
      }
    }

    this.reset_timelines()
    this.timelines = new_timelines
    console.log(this.timelines)
    return this.timelines
  }

  reset_timelines() {
    for(let timeline of this.timelines) {
      timeline.destroy_timeline()
      timeline = null
    }

    this.timelines = []
  }

  check_accepted(new_state) {
    if(new_state.is_accept_state()) {

    }
 // // get existing timelines
    // let existing_timelines = []
    // for(const timeline of this.timelines) {
    //   if(timeline.is_dead) {
    //     continue
    //   } else {
    //     existing_timelines.push(timeline)
    //   }
    // }

    // reset timelines 
    // this.reset_timelines()

    // "step" each existing timeline
  }
}

export default Machine