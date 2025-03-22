import Step from "./Step.js"
import Timeline from "./Timeline.js"

class Machine {
  constructor(states_map, initial_state_name, input_tape = null, output_tape = null, memory_structures_map = new Map()) {
    this.states_map = states_map
    this.initial_state_name = initial_state_name
    this.timelines = []
    this.accepted_timelines = 0

    this.input_tape = input_tape
    this.output_tape = output_tape
    this.memory_structures_map = memory_structures_map
  }

  run(input) {
    const initial_state = this.states_map.get(this.initial_state_name)
    const first_step = new Step(initial_state, this.input_tape, this.memory_structures_map, this.output_tape, false, false)
    const first_timeline = new Timeline([first_step], false, false)
    this.timelines.push(first_timeline)

    while(this.timelines.length > 0 && this.accepted_timelines === 0) {
      this.step()
      break
    }
  }

  step() {
    // get existing timelines
    let existing_timelines = []
    for(const timeline of this.timelines) {
      if(timeline.is_dead) {
        continue
      } else {
        existing_timelines.push(timeline)
      }
    }

    // reset timelines 
    // this.reset_timelines()

    // "step" each existing timeline
    for(const existing_timeline of existing_timelines) {
      const curr_step = existing_timeline.get_last_step()
      const curr_state = curr_step.get_curr_state()
      const next_transitions = curr_state.get_transitions()

      for(const next_transition of next_transitions) {
        const variable = next_transition
        console.log(variable.action(this.input_tape))
      }



      
      
      
      // store transitions that will return true


      // set accepted timelines --> those that go to accepted state

      // set dead timelines --> those that go to reject
      // check last step [-1]

      // create new timelines per valid transition

      // add each timeline to this.timelines


    }




  }

  reset_timelines() {
    this.timelines = []
  }

  get_valid_transitions(state) {

  }
}

export default Machine