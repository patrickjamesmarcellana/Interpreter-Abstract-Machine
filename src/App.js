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
  const input_tape_1 =  new InputTape()

  // create transitions
  // const transition_1 = new Transition(() => scan(0)))

  // create states




  return (
    <div>
      <MachineInputBox machine_specs={machine_specs} set_machine_specs={set_machine_specs}/>
      <TransitionsTester/>
    </div>
  );
}

export default App;
