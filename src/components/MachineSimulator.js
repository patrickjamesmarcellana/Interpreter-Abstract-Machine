import { useState, useEffect } from 'react'

function MachineSimulator({ machine }) {
  const [curr_timelines, set_curr_timelines] = useState(machine.get_current_timelines())
  const [has_steps, set_has_steps] = useState(true)
  const [status, set_status] = useState("running")

  useEffect(() => {
    set_curr_timelines(machine.get_current_timelines());
  }, [machine])

  const handle_step_button_press = (event) => {
    event.preventDefault()
    if(!machine) {
      console.error("Machine not initialized yet")
    }
    const timelines = machine.step()
    if(timelines.length > 0) {
      set_curr_timelines(timelines)
      set_has_steps(true)
    } else {
      set_curr_timelines(timelines)
      set_has_steps(false)
    }

    set_status(machine.get_final_verdict())
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
        className={`rounded-lg py-3 px-6 bg-[#90EE90] mr-[5px] ${(!has_steps || status === "accept" || status === "reject") ? "opacity-25 cursor-not-allowed" : "opacity-100"}`}
        onClick={handle_step_button_press}
        disabled={!has_steps || status === "accept" || status === "reject"}
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
        {curr_timelines !== false && status !== "accept" && status !== "reject" &&
          curr_timelines.map((timeline, index) => (
            <div key={index}>
              <div
                id="timeline_state">
                  Timeline {index + 1} State: {timeline.is_accepted ? "Accepted" : timeline.is_dead ? "Dead" : "Running"}
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
                          {(["Input Tape", "1D Tape", "2D Tape"].includes(memory_object.get_type())) &&
                            <div id="tape_head">
                              {memory_object.get_type()} {memory_object.get_name()} Tape Head: {memory_object.get_head()}
                            </div>
                          }
                          {memory_object.get_type()} {memory_object.get_name()} : {memory_object.get_content()}
                        </div>
                      ))}
                  </div>
              </div> <br/>
            </div>
          ))
          
        }

        {
          status === "reject" &&
          <div className="bg-red-400 p-5 mt-5"> 
          Rejected String
          </div>
        }

        {
          status === "accept" &&
          <div className="bg-green-500 p-5 mt-5"> 
          Accepted String
          </div>
        }
        

      </div>
    </div>
  )
}


export default MachineSimulator