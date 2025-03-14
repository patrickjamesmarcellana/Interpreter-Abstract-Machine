import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import MachineInputBox from './components/MachineInputBox';
import StackTester from './components/StackTester'
import QueueTester from './components/QueueTester';
import TapeTester from './components/TapeTester';
import Tape2DTester from './components/Tape2DTester';

function App() {
  const [machine_specs, set_machine_specs] = useState("")



  return (
    <div>
      <MachineInputBox machine_specs={machine_specs} set_machine_specs={set_machine_specs}/>
      <Tape2DTester/>
    </div>
  );
}

export default App;
