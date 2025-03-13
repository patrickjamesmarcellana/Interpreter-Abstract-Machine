function MachineInputBox({ machine_specs, set_machine_specs }) {

  const handleMachineSubmission = (event) => {
    event.preventDefault()
    alert(`Form successfully submitted. Content: ${machine_specs}`)
  }

  return (
    <form onSubmit={handleMachineSubmission}>
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