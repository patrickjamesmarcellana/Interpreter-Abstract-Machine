import { useState } from 'react'

function MachineSimulator({ machine }) {
  const [curr_timelines, set_curr_timelines] = useState(machine.get_current_timelines())

  const handle_step_button_press = (event) => {
    event.preventDefault()
    if(!machine) {
      console.error("Machine not initialized yet")
    }
    set_curr_timelines(machine.step())
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
    <div className="">
      <button 
        className="rounded-lg py-3 px-6 bg-[#90EE90] mr-[5px]"
        onClick={handle_step_button_press}
        title="Step">
        Step
      </button>
      <button
        className="rounded-lg py-3 px-6 bg-[#779ECB]"
        onClick={handle_run_button_press}
        title="Run">
        Run
      </button>
      <div
        id="timelines-display"
        className="">
        {
          
        }
        

      </div>
    </div>
  )
}


export default MachineSimulator