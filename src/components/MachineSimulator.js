import { useState, useEffect } from 'react'

function MachineSimulator({ machine, is_input_string_ready }) {
  const [curr_timelines, set_curr_timelines] = useState(machine.get_current_timelines())
  const [has_steps, set_has_steps] = useState(true)
  const [status, set_status] = useState("running")

  useEffect(() => {
    set_curr_timelines(machine.get_current_timelines());
  }, [machine, is_input_string_ready])

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
    <div className="w-full flex flex-col">
      <hr className="border-[1px] border-black my-[2vh]"/>
      <div className="self-center text-xl font-bold my-[2vh]">
        Simulation
      </div>
      <span>
        <button 
          className={`rounded-lg py-3 px-6 w-[47%] text-white bg-[#008000] mr-[5px] ${(!has_steps || status === "accept" || status === "reject") ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
          onClick={handle_step_button_press}
          disabled={!has_steps || status === "accept" || status === "reject"}
          title="Step">
          Step
        </button>
        <button
          className="rounded-lg py-3 px-6 bg-[#185cc7] w-[47%] float-right text-white"
          onClick={handle_run_button_press}
          title="Run">
          Run
        </button>
      </span>
      
      <div
        id="timelines_display"
        className="mt-[2vh] text-sm">
        {curr_timelines !== false &&
          curr_timelines.map((timeline, index) => (
            <div key={index}>
              <div id="timeline_state" className="bg-black text-white p-1 text-center font-bold mb-[1vh]">
                  Timeline {index + 1} State: <span className={`${timeline.is_accepted ? "text-[#099e09]" : timeline.is_dead ? "text-[#c30010]" : "text-white"}`}>{timeline.is_accepted ? "Accepted" : timeline.is_dead ? "Dead" : "Running"}</span>
              </div>

              <div id="current_step_details">
                  <div id="current_step_state">
                      Current State Name: {timeline.steps_list[timeline.steps_list.length - 1].curr_state.name}
                  </div>
                  <div id="current_memory_objects">
                      {Array.from(timeline.steps_list[timeline.steps_list.length - 1].memory_objects.get_map()).map(([key, memory_object]) => (
                        <div key={key}>
                          {(["Input Tape", "1D Tape", "2D Tape"].includes(memory_object.get_type())) &&
                            <div id="tape_head">
                              {memory_object.get_type()} {memory_object.get_name()} Tape Head: {memory_object.get_head()}
                            </div>
                          }
                          {memory_object.get_type()} {memory_object.get_name()} : <br/> {memory_object.get_content()}
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