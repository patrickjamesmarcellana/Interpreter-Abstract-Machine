function MachineInputBox({ machine_specs, set_machine_specs, set_is_input_string_ready, set_is_machine_ready }) {

  const handle_machine_submission = (event) => {
    event.preventDefault()
    set_is_machine_ready(true)
  }

  return (
    <form 
      className="mb-[30px]"
      onSubmit={handle_machine_submission}>
      <label 
        className="font-bold">
          Input your machine here:
          <br/>
          <textarea
            className="font-normal border-2 border-black"
            rows={10}
            cols={50} 
            name="machine_specs"
            required={true}
            placeholder="Enter machine specifications."
            onChange={(e) => {set_machine_specs(e.target.value); set_is_input_string_ready(false)}}
          />
      </label>
      <br/>
      <input 
        className="rounded-lg py-3 px-6 bg-[#90EE90]"
        type="submit"
      />
    </form>
  )
}

export default MachineInputBox;