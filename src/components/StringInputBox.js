function StringInputBox({ input_string, set_input_string, is_machine_ready }) {
  const handle_string_input_submission = (event) => {
    event.preventDefault()
    console.log(`String input submitted. Content: ${input_string}`)
    // start machine simulation
  }

  return(
    <div>
      <form onSubmit={handle_string_input_submission}>
        <input 
          type="text" 
          required={true} 
          disabled={!is_machine_ready} 
          placeholder="Enter input string" 
          onChange={(e) => set_input_string(e.target.value)}/><br/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default StringInputBox