import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import StackTester from './components/StackTester'
import MachineInputBox from './components/MachineInputBox';
import QueueTester from './components/QueueTester';

function App() {
  const [machine_specs, set_machine_specs] = useState("")



  return (
    <div>
      <MachineInputBox machine_specs={machine_specs} set_machine_specs={set_machine_specs}/>
      <QueueTester/>
    </div>
  );
}

export default App;
