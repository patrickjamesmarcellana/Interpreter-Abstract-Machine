import './App.css';
import { useEffect, useState, useMemo } from 'react'
import MachineInputBox from './components/MachineInputBox';
import StringInputBox from './components/StringInputBox';
import MachineSimulator from './components/MachineSimulator';

import InputTape from "./data_structures/InputTape"
import OutputTape from "./data_structures/OutputTape"
import Queue from "./data_structures/Queue"
import Stack from "./data_structures/Stack"
import Tape1D from "./data_structures/Tape1D"
import Tape2D from "./data_structures/Tape2D"
import MemoryObjects from "./data_structures/MemoryObjects"

import State from './machine_essentials/State';
import Transition from './machine_essentials/Transition';
import Machine from './machine_essentials/Machine';
import {scan, print, scan_right, scan_left, read, write, right, left, up, down} from "./machine_essentials/TransitionList"

function App() {
  // state variables
  const [machine_specs, set_machine_specs] = useState("")
  const [initial_state_name, set_initial_state_name] = useState("")
  const [input_string, set_input_string] = useState("")
  const [is_machine_ready, set_is_machine_ready] = useState(false)
  const [is_input_string_ready, set_is_input_string_ready] = useState(false)
  const [machine, set_machine] = useState(null)

  // transition command map
  const command_map = new Map([
    ["SCAN", scan],
    ["PRINT", print],
    ["SCAN RIGHT", scan_right],
    ["SCAN LEFT", scan_left],
    ["READ", read],
    ["WRITE", write],
    ["RIGHT", right],
    ["LEFT", left],
    ["UP", up],
    ["DOWN", down]
  ]) 

  // memory object map
  const memory_object_map = new Map([
    ["STACK", Stack],
    ["QUEUE", Queue],
    ["TAPE", Tape1D],
    ["2D_TAPE", Tape2D],
    ["INPUT_TAPE", InputTape],
    ["OUTPUT_TAPE", OutputTape]
  ])

  // function definitions
  function get_unique_state_names(transitions) {
    const unique_state_names = new Set()
    for (const transition of transitions) {
      unique_state_names.add(transition.source_state_name)
      unique_state_names.add(transition.destination_state_name)
    }
    return [...unique_state_names]
  }

  function parse_machine_specs() {
    if(machine_specs !== "") {
      const section_lines = separate_sections(machine_specs)
      console.log(section_lines.data_section_lines)
      console.log(section_lines.logic_section_lines) 
    }

    // set_is_machine_ready(true)
  }

  function separate_sections(machine_specs) {
    const lines = machine_specs.trim().split("\n")
    const data_section_starting_index = lines.findIndex(line => line.startsWith(".DATA"))
    const logic_section_starting_index = lines.findIndex(line => line.startsWith(".LOGIC"))

    let data_section_lines = []
    let logic_section_lines = []

    if(data_section_starting_index !== -1 && logic_section_starting_index !== -1) {
      data_section_lines = lines.slice(data_section_starting_index, logic_section_starting_index)
    }

    if(logic_section_starting_index !== -1) {
      logic_section_lines = lines.slice(logic_section_starting_index)
    }

    return { data_section_lines, logic_section_lines }
  }

  // create memory objects
  const input_tape_1 = useMemo(() => {
    const tape = new InputTape("IT1")
    tape.initialize(input_string)
    return tape
  }, [input_string]) // automatically create an input tape if no Tape1D or Tape2D was declared
  
  const memory_objects = useMemo(() => {
    const mem_objects = new MemoryObjects()
    mem_objects.upsert("IT1", input_tape_1)
    return mem_objects
  }, [input_tape_1])
  


  // // parse machine specs
  // useEffect(() => {
  //   parse_machine_specs()
  // }, [])

  // create transitions
  const machine_transitions = useMemo(() => [
    new Transition("q0", "IT1", (memory_object) => scan(memory_object, '0'), "q0"),
    new Transition("q0", "IT1", (memory_object) => scan(memory_object, '1'), "q1"),
    new Transition("q0", "IT1", (memory_object) => scan(memory_object, '1'), "accept"),
    new Transition("q1", "IT1", (memory_object) => scan(memory_object, '0'), "q0"),
    new Transition("q1", "IT1", (memory_object) => scan(memory_object, '1'), "q2"),
    new Transition("q2", "IT1", (memory_object) => scan(memory_object, '0'), "q0"),
    new Transition("q2", "IT1", (memory_object) => scan(memory_object, '1'), "q1"),
    new Transition("q2", "IT1", (memory_object) => scan(memory_object, '1'), "accept")
  ], [])

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

    // set destination states for each transition and add each transition to their respective source states
    for(let transition of machine_transitions) {
      transition.set_destination_state(states_map.get(transition.destination_state_name))
      const source_state = states_map.get(transition.source_state_name)
      source_state.add_transition(transition)
    }

    return { states_map, initial_state }
  }, [machine_transitions])

  // set initial state name
  useEffect(() => {
    if(initial_state_name !== initial_state) {
      set_initial_state_name(initial_state)
    }
  }, [initial_state, initial_state_name])

  // create machine and run it given input string
  useEffect(() => {
    set_machine(new Machine(states_map, initial_state_name, memory_objects))
  }, [states_map, initial_state_name, memory_objects])

  return (
    <div 
      className="mt-[20px] ml-[20px]">
      <MachineInputBox machine_specs={machine_specs} set_machine_specs={set_machine_specs} parse_machine_specs={parse_machine_specs}/>
      { is_machine_ready && 
        <StringInputBox input_string={input_string} set_input_string={set_input_string} set_is_input_string_ready={set_is_input_string_ready} is_machine_ready={is_machine_ready}/>
      }
      { is_input_string_ready && machine &&
        <MachineSimulator machine={machine}/>
      }
    </div>
  );
}

export default App;
