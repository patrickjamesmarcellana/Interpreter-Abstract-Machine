function StringInputBox(input_string, set_input_string) {
  return(
    <div>
      <input type="text" placeholder="Enter input string" onChange={(e) => set_input_string(e.target.value)}>
      </input>
    </div>
  )
}

export default StringInputBox