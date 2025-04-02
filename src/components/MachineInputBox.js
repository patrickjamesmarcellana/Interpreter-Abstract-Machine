import { useState } from 'react'

function MachineInputBox({ machine_specs, set_machine_specs, set_is_input_string_ready, set_is_machine_ready }) {

  const [machine_submitted, set_machine_submitted] = useState(false)


  const handle_machine_submission = (event) => {
    event.preventDefault()
    set_is_machine_ready(true)
    set_machine_submitted(true)
  }

  const handle_reset_button_click = (event) => {
    event.preventDefault()
    set_is_input_string_ready(false)
    set_is_machine_ready(false)
    set_machine_submitted(false)
    set_machine_specs("")
  }

  return (
    <form 
      className="mb-[4vh]"
      onSubmit={handle_machine_submission}>
      <label 
        className="">
          <textarea
            className="disabled:bg-white disabled:cursor-not-allowed resize-none font-normal border-2 border-black text-[13px] p-2"
            rows={15}
            disabled={machine_submitted}
            cols={85} 
            name="machine_specs"
            required={true}
            value={machine_specs}
            placeholder="Enter machine specifications."
            onChange={(e) => {set_machine_specs(e.target.value); set_is_input_string_ready(false)}}
          />
      </label>
      <br/>
      <span>
        <input 
          className={`disabled:cursor-not-allowed rounded-lg py-3 bg-[#008000] w-[47%] drop-shadow-lg text-white hover:bg-gray-400 active:bg-gray-600 disabled:opacity-50 disabled:hover:bg-[#008000]`}
          type="submit"
          value="Submit Machine Specs"
          disabled={machine_submitted}
        />
        <input 
          className={`rounded-lg py-3 bg-[#c30010] w-[47%] float-right drop-shadow-lg text-white hover:bg-gray-400 active:bg-gray-600`}
          type="button"
          onClick={handle_reset_button_click}
          value="Reset Machine Specs"
        />
      </span>
      
    </form>
  )
}

export default MachineInputBox;