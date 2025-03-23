function MachineSimulator({ machine }) {

  const handle_step_button_press = (event) => {
    event.preventDefault()
    if(!machine) {
      console.error("Machine not initialized yet")
    }
    machine.step()
  }
  
  const handle_run_button_press = (event) => {
    event.preventDefault()
    if(!machine) {
      console.error("Machine not initialized yet")
    }
    const result = machine.run()
    console.log(`Result: ${result}`)
  }

  return (
    <div>
      <button 
        onClick={handle_step_button_press}
        title="Step">
        Step
      </button>
      <button
        onClick={handle_run_button_press}
        title="Run">
        Run
      </button>
    </div>
  )
}


export default MachineSimulator