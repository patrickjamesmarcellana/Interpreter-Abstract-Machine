import InputTape from "../data_structures/InputTape"

function InputTapeTester() {
  const input_tape = new InputTape("I1", "00001111")
  return (
    <div>
      <button title="Scan 0" onClick={() => input_tape.scan_right('0')}>Scan 0</button>
      <button title="Scan 1" onClick={() => input_tape.scan_right('1')}>Scan 1</button>
      <button title="Scan #" onClick={() => input_tape.scan_right('#')}>Scan #</button>
      <button title="Print Tape" onClick={() => input_tape.print_tape()}>Print Tape</button>
      <button title="Print Head" onClick={() => input_tape.print_head()}>Print Head</button>
      <button title="Is Complete" onClick={() => input_tape.is_complete()}>Is Complete</button>
    </div> 
  )
}

export default InputTapeTester