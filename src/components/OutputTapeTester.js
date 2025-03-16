import OutputTape from "../data_structures/OutputTape"

function OutputTapeTester(output_tape) {
  return (
    <div>
      <h1>{output_tape.name}</h1>
      <button title="Print 0" onClick={() => output_tape.print('0')}>Print 0</button>
      <button title="Print 1" onClick={() => output_tape.print('1')}>Print 1</button>
      <button title="Print #" onClick={() => output_tape.print('#')}>Print #</button>
      <button title="Print Tape" onClick={() => output_tape.print_tape()}>Print Tape</button>
      <br/>
    </div> 
  )
}

export default OutputTapeTester