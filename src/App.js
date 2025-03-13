import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import MachineInputBox from './MachineInputBox';

function App() {
  const [machine_specs, set_machine_specs] = useState("")
  
  return (
    <MachineInputBox machine_specs={machine_specs} set_machine_specs={set_machine_specs}/>
  );
}

export default App;
