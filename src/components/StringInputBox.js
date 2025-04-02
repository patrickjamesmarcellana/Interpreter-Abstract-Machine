function StringInputBox({ input_string, set_input_string, set_is_input_string_ready, is_machine_ready, parse_machine_specs }) {
  const handle_string_input_submission = (event) => {
    event.preventDefault()
    // console.log(`String input submitted. Content: ${input_string}`)
    set_is_input_string_ready(true)
    parse_machine_specs()
  }

  return(
    <div className="w-full">
      <form 
        className="mb-[4vh] w-full"
        onSubmit={handle_string_input_submission}>
          {/* <label className="font-bold">
            Input string:
          </label><br/> */}
          <input 
            className="border-2 border-black w-full p-2"
            type="text" 
            disabled={!is_machine_ready} 
            placeholder="Enter input string" 
            onChange={(e) => {set_input_string(e.target.value); set_is_input_string_ready(false)}}/><br/>
          <input
            className="mt-[5px] rounded-lg py-3 px-6 bg-[#008000] text-white w-full hover:bg-gray-400 active:bg-gray-600" 
            type="submit"
            value="Submit Input String"/>
      </form>
    </div>
  )
}

export default StringInputBox