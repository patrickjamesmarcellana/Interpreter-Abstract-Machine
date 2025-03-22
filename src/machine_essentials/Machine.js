import MemoryObjects from "../data_structures/MemoryObjects.js"
import Step from "./Step.js"
import Timeline from "./Timeline.js"

class Machine {
  constructor(states_map, initial_state_name, memory_objects = new MemoryObjects()) {
    this.states_map = states_map
    this.initial_state_name = initial_state_name
    this.timelines = []
    this.accepted_timelines = 0
    this.memory_objects = memory_objects
  }

  run(input) {
    const initial_state = this.states_map.get(this.initial_state_name)
    const first_step = new Step(initial_state, this.memory_objects, false, false)
    const first_timeline = new Timeline([first_step], false, false)
    this.timelines.push(first_timeline)

    while(this.timelines.length > 0 && this.accepted_timelines === 0) {
      this.step()
      this.check_accepted()
      // check if there is accepted
      // check if there is dead
      // renew timelines list
      break
    }
  }

  step() {
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

          const new_step = new Step(new_state, new_memory_objects, false, false)

          const new_timeline = timeline.clone()
          new_timeline.add_step(new_step)

          new_timelines.push(new_timeline)
        }
      }
    }

    this.reset_timelines()
    this.timelines = new_timelines
  
    // store transitions that will return true


    // set accepted timelines --> those that go to accepted state

    // set dead timelines --> those that go to reject
    // check last step [-1]

    // create new timelines per valid transition

    // add each timeline to this.timelines
  }

  reset_timelines() {
    for(let timeline of this.timelines) {
      timeline.destroy_timeline()
      timeline = null
    }

    this.timelines = []
  }

  check_accepted() {
    for(let timeline of this.timelines) {
      // if(timeline.)
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