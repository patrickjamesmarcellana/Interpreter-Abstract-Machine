import OutputTape from "../data_structures/OutputTape"

function OutputTapeTester() {
  const output_tape = new OutputTape("O1")
  return (
    <div>
      <button title="Print 0" onClick={() => output_tape.print('0')}>Print 0</button>
      <button title="Print 1" onClick={() => output_tape.print('1')}>Print 1</button>
      <button title="Print #" onClick={() => output_tape.print('#')}>Print #</button>
      <button title="Print Tape" onClick={() => output_tape.print_tape()}>Print Tape</button>
    </div> 
  )
}

export default OutputTapeTester