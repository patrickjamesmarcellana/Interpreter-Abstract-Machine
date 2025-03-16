import Tape1D from "../data_structures/Tape1D"

function TapeTester(tape) {
  return (
    <div>
      <h1>{tape.name}</h1>
      <button onClick={() => tape.right("#", "0")}>Right (#, 0)</button>
      <button onClick={() => tape.right("#", "1")}>Right (#, 1)</button>
      <button onClick={() => tape.right("0", "1")}>Right (0, 1)</button>
      <button onClick={() => tape.right("1", "0")}>Right (1, 0)</button>
      <button onClick={() => tape.left("#", "0")}>Left (#, 0)</button>
      <button onClick={() => tape.left("#", "1")}>Left (#, 1)</button>
      <button onClick={() => tape.left("0", "1")}>Left (0, 1)</button>
      <button onClick={() => tape.left("1", "0")}>Left (1, 0)</button>
      <button onClick={() => tape.print_tape()}>Print Tape</button>
      <button onClick={() => tape.print_keys()}>Print Keys</button>
      <button onClick={() => tape.print_head()}>Print Head</button>
      <br/>
    </div> 
  )
}

export default TapeTester