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
        className="">
          <textarea
            className="resize-none font-normal border-2 border-black text-[13px] p-2"
            rows={15}
            cols={85} 
            name="machine_specs"
            required={true}
            placeholder="Enter machine specifications."
            onChange={(e) => {set_machine_specs(e.target.value); set_is_input_string_ready(false)}}
          />
      </label>
      <br/>
      <input 
        className="rounded-lg py-3 bg-[#008000] w-full drop-shadow-lg text-white hover:bg-gray-400 active:bg-gray-600"
        type="submit"
      />
    </form>
  )
}

export default MachineInputBox;