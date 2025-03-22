import './App.css';
import { useEffect, useState, useMemo } from 'react'
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
import Machine from './machine_essentials/Machine';
import {scan, print, scan_right, scan_left, read, write, right, left, up, down} from "./machine_essentials/TransitionList"

function App() {
  // state variables
  const [machine_specs, set_machine_specs] = useState("")
  const [initial_state_name, set_initial_state_name] = useState("")

  // create memory objects
  const input_tape_1 =  new InputTape("IT1") // automatically create an input tape if no Tape1D or Tape2D was declared
  const memory_structures_map = new Map()

  // function definitions
  function get_unique_state_names(transitions) {
    const unique_state_names = new Set()
    for (const transition of transitions) {
      unique_state_names.add(transition.source_state_name)
      unique_state_names.add(transition.destination_state_name)
    }
    return [...unique_state_names]
  }

  // parse machine specs
  // parse_machine_specs()

  // create transitions
  const machine_transitions = useMemo(() => [
    new Transition("q0", (input_tape_1) => scan(input_tape_1, '0'), "q0"),
    new Transition("q0", (input_tape_1) => scan(input_tape_1, '1'), "q1"),
    new Transition("q0", (input_tape_1) => scan(input_tape_1, '1'), "accept"),
    new Transition("q1", (input_tape_1) => scan(input_tape_1, '0'), "q0"),
    new Transition("q1", (input_tape_1) => scan(input_tape_1, '1'), "q2"),
    new Transition("q2", (input_tape_1) => scan(input_tape_1, '0'), "q0"),
    new Transition("q2", (input_tape_1) => scan(input_tape_1, '1'), "q1"),
    new Transition("q2", (input_tape_1) => scan(input_tape_1, '1'), "accept")
  ])

  // create states
  const { states_map, initial_state } = useMemo(() => {
    const unique_state_names = get_unique_state_names(machine_transitions)
    const states_map = new Map()
    let initial_state = ""

    unique_state_names.forEach((state_name, index) => {
      const is_initial = index === 0
      const is_accept = state_name === "accept"
      const is_reject = state_name === "reject"

      states_map.set(state_name, new State(state_name, is_initial, is_accept, is_reject))

      if(is_initial) {
        initial_state = state_name
      }
    })

    return { states_map, initial_state }
  }, [machine_transitions])

  // set initial state name
  useEffect(() => {
    set_initial_state_name(initial_state)
  }, [initial_state])

  // set destination states for each transition and add each transition to their respective source states
  useEffect(() => {
    for(let transition of machine_transitions) {
      transition.set_destination_state(states_map.get(transition.destination_state_name))
      const source_state = states_map.get(transition.source_state_name)
      source_state.add_transition(transition)
    }
  }, [machine_transitions, states_map])

  // create machine and run it given input string
  useEffect(() => {
    if(initial_state_name) {
      const given_input_string = "0011"
      input_tape_1.initialize(given_input_string) // only do this if no tape 1d or tape 2d is declared
      const machine = new Machine(states_map, initial_state_name, input_tape_1, null, memory_structures_map)
      const result = machine.run(given_input_string)
      // console.log(result)
    }
  })
  
  
  return (
    <div>
      <MachineInputBox machine_specs={machine_specs} set_machine_specs={set_machine_specs}/>
      <TransitionsTester/>
    </div>
  );
}

export default App;
