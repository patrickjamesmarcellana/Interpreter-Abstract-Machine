function StringInputBox({ input_string, set_input_string, is_machine_ready }) {
  return(
    <div>
      <input 
        type="text" 
        required={true} 
        disabled={!is_machine_ready} 
        placeholder="Enter input string" 
        onChange={(e) => set_input_string(e.target.value)}/>
    </div>
  )
}

export default StringInputBox