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
  const [input_string, set_input_string] = useState("")
  const [is_machine_ready, set_is_machine_ready] = useState(false)
  const [is_input_string_ready, set_is_input_string_ready] = useState(false)
  const [is_input_tape_initialized, set_is_input_tape_initialized] = useState(false)
  let [input_memory_object_name, set_input_memory_object_name] = useState("")

  let [memory_objects, set_memory_objects] = useState(new MemoryObjects())
  let [machine_transitions, set_machine_transitions] = useState([])
  let [states_map, set_states_map] = useState(new Map()) 
  let [initial_state_name, set_initial_state_name] = useState("")
  let [machine, set_machine] = useState(null)

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
      create_memory_objects(section_lines.data_section_lines)
      create_transitions(section_lines.logic_section_lines)
      create_states()
      create_machine()
    }
  }

  function separate_sections(machine_specs) {
    const lines = machine_specs.trim().split("\n")
    const data_section_starting_index = lines.findIndex(line => line.startsWith(".DATA"))
    const logic_section_starting_index = lines.findIndex(line => line.startsWith(".LOGIC"))

    let data_section_lines = []
    let logic_section_lines = []

    if(data_section_starting_index !== -1 && logic_section_starting_index !== -1) {
      data_section_lines = lines.slice(data_section_starting_index + 1, logic_section_starting_index)
    }

    if(logic_section_starting_index !== -1) {
      logic_section_lines = lines.slice(logic_section_starting_index + 1)
    }

    return { data_section_lines, logic_section_lines }
  }

  function create_memory_objects(data_section_lines) {
    memory_objects.get_map().clear()
    for(const line of data_section_lines) {
      if(line === "") {
        continue
      }
      
      const memory_object_and_name = line.split(" ")
      const MemoryInstanceClass = memory_object_map.get(memory_object_and_name[0])
      if(MemoryInstanceClass) {
        const memory_object_instance = new MemoryInstanceClass(memory_object_and_name[1])
        if(memory_object_instance instanceof Tape1D || memory_object_instance instanceof Tape2D) {
          memory_object_instance.place_blank_symbol()
        }
        memory_objects.upsert(memory_object_and_name[1], memory_object_instance)
      }
    }

    set_input_tape()
    console.log(memory_objects)
  }

  function set_input_tape() {
    const has_1D_tape = [...memory_objects.get_map().values()].some(value => value instanceof Tape1D)
    const has_2D_tape = [...memory_objects.get_map().values()].some(value => value instanceof Tape2D)

    if(has_1D_tape || has_2D_tape) {
      for(const key of memory_objects.get_map().keys()) {
        const value = memory_objects.get_map().get(key)
        if(value instanceof Tape1D || value instanceof Tape2D) {
          value.set_as_input_tape()
          set_input_memory_object_name(key)
          break
        }
      }
    } else {
      const input_tape_name = "IT"
      const input_tape = new InputTape(input_tape_name)
      set_input_memory_object_name(input_tape_name)
      memory_objects.upsert(input_tape_name, input_tape)
    }
  }

  function create_transitions(logic_section_lines) {
    machine_transitions = []
    for(const line of logic_section_lines) {
      if(line === "") {
        continue
      }

      const state_command_split = line.split("] ")
      const command_line = state_command_split[1]
      const command_memory_transitions = extract_command_name_and_memory_name(command_line)

      const source_state_name = state_command_split[0] // Use in Transition
      const command = command_map.get(command_memory_transitions.command) // Use in Transition
      const memory_object_name_to_use = command_memory_transitions.memory_object_name_to_use // Use in Transition
      const transitions_arr = command_memory_transitions.transitions_line.split(", ")

      if(!command) {
        console.log("Command not found in command map")
        return
      }

      for(const transition_line of transitions_arr) {
        const transition_details = parse_transition(command_memory_transitions.command, transition_line)
        const read_symbol = transition_details.read_symbol
        const write_symbol = transition_details.write_symbol
        const destination_state_name = transition_details.destination_state_name
        
        if(write_symbol === "") {
          const transition = new Transition(source_state_name, memory_object_name_to_use, (memory_object) => command(memory_object, read_symbol), destination_state_name)
          machine_transitions.push(transition)
        } else {
          const transition = new Transition(source_state_name, memory_object_name_to_use, (memory_object) => command(memory_object, read_symbol, write_symbol), destination_state_name)
          machine_transitions.push(transition)
        }
      }
    }
    console.log(machine_transitions)
  }

  function extract_command_name_and_memory_name(command_line) {
    let command = ""
    let memory_object_name_to_use = ""
    let transitions_line = ""

    const commands_with_param = ["READ", "WRITE", "LEFT", "RIGHT", "UP", "DOWN"]
    const commands_without_param = ["SCAN RIGHT", "SCAN LEFT", "SCAN"] // excluded special PRINT

    if(commands_with_param.some(cmd => command_line.startsWith(cmd))) {
        const match = command_line.match(/^(\w+)\((\w+)\)/)
        if(match) {
          command = match[1]
          memory_object_name_to_use = match[2]
          transitions_line = command_line.replace(match[0], "").trim()
        }
    } else if(commands_without_param.some(cmd => command_line.startsWith(cmd))) {
        const match = command_line.match(/^(SCAN RIGHT|SCAN LEFT|SCAN)\b/)
        if(match) {
          command = match[1]
          memory_object_name_to_use = "IT"
          transitions_line = command_line.replace(command, "").trim()
        }
    } else if(command_line.startsWith("PRINT")) {
        command = "PRINT"
        memory_object_name_to_use = "OT"
        if(!memory_objects.get_map().has(memory_object_name_to_use)) {
          const output_tape = new OutputTape(memory_object_name_to_use)
          memory_objects.upsert(memory_object_name_to_use, output_tape)
        }
        transitions_line = command_line.replace(command, "").trim()
    }

    return { command, memory_object_name_to_use, transitions_line }
  }

  function parse_transition(command, transition_line) {
    const commands_with_two_symbols = ["LEFT", "RIGHT", "UP", "DOWN"]
    const commands_with_one_symbol = ["READ", "WRITE", "SCAN RIGHT", "SCAN LEFT", "SCAN", "PRINT"] // excluded special PRINT
    let read_symbol = ""
    let write_symbol = ""
    let destination_state_name = ""

    if(commands_with_one_symbol.includes(command)) {
      [read_symbol, destination_state_name] = transition_line.slice(1, -1).split(",")
    } else if(commands_with_two_symbols.includes(command)) {
      const match = transition_line.match(/\(([^/,]+)\/([^/,]+),([^/)]+)\)/)
      if(match) {
        read_symbol = match[1]
        write_symbol = match[2]
        destination_state_name = match[3]
      }
    }

    return { read_symbol, write_symbol, destination_state_name }
  }

  function create_states() {
    states_map.clear()

    const unique_state_names = get_unique_state_names(machine_transitions)

    unique_state_names.forEach((state_name, index) => {
      const is_initial = index === 0
      const is_accept = state_name === "accept"
      const is_reject = state_name === "reject"

      states_map.set(state_name, new State(state_name, is_initial, is_accept, is_reject))

      if(is_initial) {
        initial_state_name = state_name
      }
    })

    // set destination states for each transition and add each transition to their respective source states
    for(let transition of machine_transitions) {
      transition.set_destination_state(states_map.get(transition.destination_state_name))
      const source_state = states_map.get(transition.source_state_name)
      source_state.add_transition(transition)
    }

    console.log(states_map)
    console.log(`Initial State Name: ${initial_state_name}`)
  }

  function create_machine() {
    set_machine(new Machine(states_map, initial_state_name, memory_objects))
    // console.log(machine)
  }

  useEffect(() => {
    if(is_input_string_ready && machine) {
      machine.reset_memory(memory_objects)
      machine.memory_objects.get_map().get(input_memory_object_name).initialize(input_string)
      set_is_input_tape_initialized(true)
    }
  }, [is_input_string_ready, machine, input_string])

  useEffect(() => {
    if (machine) {
      machine.initialize()
      console.log("Machine has been set:", machine);
    }
  }, [machine]);

  return (
    <div 
      className="my-[5vh] w-fit mx-auto flex flex-col items-center bg-red-300">

      <div className="text-[40px] font-bold mb-[1vh]">Abstract Machine Interpreter</div>

      <MachineInputBox machine_specs={machine_specs} set_machine_specs={set_machine_specs} parse_machine_specs={parse_machine_specs} set_is_input_string_ready={set_is_input_string_ready} set_is_machine_ready={set_is_machine_ready}/>
      { is_machine_ready &&
        <StringInputBox input_string={input_string} set_input_string={set_input_string} set_is_input_string_ready={set_is_input_string_ready} is_machine_ready={is_machine_ready} parse_machine_specs={parse_machine_specs}/>
      }
      { machine && is_input_string_ready && is_input_tape_initialized &&
        <MachineSimulator machine={machine} is_input_string_ready={is_input_string_ready}/>
      }
    </div>
  );
}

export default App;
