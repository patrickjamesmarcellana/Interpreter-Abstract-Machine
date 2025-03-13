import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import StackTester from './components/StackTester'
import MachineInputBox from './components/MachineInputBox';

function App() {
  const [machine_specs, set_machine_specs] = useState("")



  return (
    <div>
      <MachineInputBox machine_specs={machine_specs} set_machine_specs={set_machine_specs}/>
    </div>
  );
}

export default App;
