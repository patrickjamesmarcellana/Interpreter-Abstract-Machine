function StringInputBox({ input_string, set_input_string, set_is_input_string_ready, is_machine_ready }) {
  const handle_string_input_submission = (event) => {
    event.preventDefault()
    console.log(`String input submitted. Content: ${input_string}`)
    set_is_input_string_ready(true)
    // start machine simulation
  }

  return(
    <div>
      <form 
        className="mb-[30px]"
        onSubmit={handle_string_input_submission}>
          <label className="font-bold">
            Input string:
          </label><br/>
          <input 
            className="border-2 border-black"
            type="text" 
            required={true} 
            disabled={!is_machine_ready} 
            placeholder="Enter input string" 
            onChange={(e) => set_input_string(e.target.value)}/><br/>
          <input
            className="mt-[5px] rounded-lg py-3 px-6 bg-[#90EE90]" 
            type="submit"/>
      </form>
    </div>
  )
}

export default StringInputBox