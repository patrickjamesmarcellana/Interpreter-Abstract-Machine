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
        id="timelines_display"
        className="">
        {curr_timelines !== false &&
          curr_timelines.map((timeline, index) => (
            <div key={index}>
              <div
                id="timeline_state">
                  Timeline State: {timeline.is_accepted ? "Accepted" : timeline.is_dead ? "Dead" : "Running"}
              </div>

              <div
                id="current_step_details">
                  <div
                    id="current_step_state">
                      Current State Name: {timeline.steps_list[timeline.steps_list.length - 1].curr_state.name}
                  </div>
                  <div
                    id="current_memory_objects">
                      {Array.from(timeline.steps_list[timeline.steps_list.length - 1].memory_objects.get_map()).map(([key, memory_object]) => (
                        <div key={key}>
                          {(memory_object.get_type() === "Input Tape" | "1D Tape" | "2D Tape") &&
                            <div id="tape_head">
                              Tape Head: {memory_object.get_head()}
                            </div>
                          }
                          {memory_object.get_name()} : {memory_object.get_content()}
                        </div>
                      ))}
                  </div>
              </div> <br/>
            </div>
          ))
          
        }
        

      </div>
    </div>
  )
}


export default MachineSimulator