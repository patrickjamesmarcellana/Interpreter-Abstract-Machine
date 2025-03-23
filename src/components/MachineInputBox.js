function MachineInputBox({ machine_specs, set_machine_specs }) {

  const handle_machine_submission = (event) => {
    event.preventDefault()
    alert(`Form successfully submitted. Content: ${machine_specs}`)
    // parse machine specs
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
            onChange={(e) => set_machine_specs(e.target.value)}
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