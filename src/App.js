import './App.css';
import { useState } from 'react'
import MachineInputBox from './components/MachineInputBox';

import InputTape from "./data_structures/InputTape"
import OutputTape from "./data_structures/OutputTape"
import Queue from "./data_structures/Queue"
import Stack from "./data_structures/Stack"
import Tape1D from "./data_structures/Tape1D"
import Tape2D from "./data_structures/Tape2D"

import TransitionsTester from './components/TransitionsTester';
import State from './machine_essentials/State';
import Transition from './machine_essentials/Transition';
import {scan, print, scan_right, scan_left, read, write, right, left, up, down} from "./machine_essentials/TransitionList"

function App() {
  const [machine_specs, set_machine_specs] = useState("")

  // parse machine specs

  // create memory objects
  const input_tape_1 =  new InputTape("IT1") // automatically create an input tape if no Tape1D or Tape2D was declared

  // create transitions
  const transition_1 = new Transition("q0", () => scan(input_tape_1, '0'), "q0")
  const transition_2 = new Transition("q0", () => scan(input_tape_1, '1'), "q1")
  const transition_3 = new Transition("q0", () => scan(input_tape_1, '1'), "accept")
  const transition_4 = new Transition("q1", () => scan(input_tape_1, '0'), "q0")
  const transition_5 = new Transition("q1", () => scan(input_tape_1, '1'), "q2")
  const transition_6 = new Transition("q2", () => scan(input_tape_1, '0'), "q0")
  const transition_7 = new Transition("q2", () => scan(input_tape_1, '1'), "q1")
  const transition_8 = new Transition("q2", () => scan(input_tape_1, '1'), "accept")

  const machine_transitions = [transition_1, transition_2, transition_3, transition_4, transition_5, transition_6, transition_7, transition_8]

  // create states
  function get_unique_state_names() {
    const unique_state_names = []
    for(const transition of machine_transitions) {
      if(!unique_state_names.includes(transition.source_state_name)) {
        unique_state_names.push(transition.source_state_name)
      }

      if(!unique_state_names.includes(transition.destination_state_name)) {
        unique_state_names.push(transition.destination_state_name)
      }
    }

    return unique_state_names
  }
  
  const unique_state_names = get_unique_state_names()
  // console.log(`Unique State Names: ${unique_state_names}`)
  const states_map = new Map()
  unique_state_names.forEach((state_name, index) => {
    let is_initial = false
    if(index === 0) {
      is_initial = true
    }

    let is_accept = false
    if(state_name === "accept") {
      is_accept = true
    }

    let is_reject = false
    if(state_name === "reject") {
      is_reject = true
    }
    
    states_map.set(state_name, new State(state_name, is_initial, is_accept, is_reject))
  })

  // set destination states for each transition and add each transition to their respective source states
  for(let transition of machine_transitions) {
    transition.set_destination_state(states_map.get(transition.destination_state_name))
    const source_state = states_map.get(transition.source_state_name)
    source_state.add_transition(transition)
  }
  console.log(states_map.get("q0"))

  // run machine given input string
  

  return (
    <div>
      <MachineInputBox machine_specs={machine_specs} set_machine_specs={set_machine_specs}/>
      <TransitionsTester/>
    </div>
  );
}

export default App;
