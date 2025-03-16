import InputTape from "../data_structures/InputTape"

function InputTapeTester(input_tape) {
  return (
    <div>
      <h1>{input_tape.name}</h1>
      <button title="Scan 0 Right" onClick={() => input_tape.scan_right('0')}>Scan 0 Right</button>
      <button title="Scan 1 Right" onClick={() => input_tape.scan_right('1')}>Scan 1 Right</button>
      <button title="Scan # Right" onClick={() => input_tape.scan_right('#')}>Scan # Right</button>
      <button title="Scan 0 Left" onClick={() => input_tape.scan_left('0')}>Scan 0 Left</button>
      <button title="Scan 1 Left" onClick={() => input_tape.scan_left('1')}>Scan 1 Left</button>
      <button title="Scan # Left" onClick={() => input_tape.scan_left('#')}>Scan # Left</button>
      <button title="Print Tape" onClick={() => input_tape.print_tape()}>Print Tape</button>
      <button title="Print Head" onClick={() => input_tape.print_head()}>Print Head</button>
      <button title="Is Complete" onClick={() => input_tape.is_complete()}>Is Complete</button>
      <br/>
    </div>   
  )
}

export default InputTapeTester