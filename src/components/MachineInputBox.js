function MachineInputBox({ machine_specs, set_machine_specs }) {

  const handle_machine_submission = (event) => {
    event.preventDefault()
    alert(`Form successfully submitted. Content: ${machine_specs}`)
    // parse machine specs
  }

  return (
    <form onSubmit={handle_machine_submission}>
      <label>Input your machine here:
        <br/>
        <textarea
          rows={10}
          cols={50} 
          name="machine_specs"
          required={true}
          placeholder="Enter machine specifications."
          onChange={(e) => set_machine_specs(e.target.value)}
        />
      </label>
      <br/>
      <input type="submit"/>
    </form>
  )
}

export default MachineInputBox;