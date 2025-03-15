import Tape2D from "../data_structures/Tape2D"

function Tape2DTester() {
  const tape = new Tape2D("T2", true)
  return (
    <div>
      <button onClick={() => tape.right("#", "0")}>Right (#, 0)</button>
      <button onClick={() => tape.right("#", "1")}>Right (#, 1)</button>
      <button onClick={() => tape.right("0", "1")}>Right (0, 1)</button>
      <button onClick={() => tape.right("1", "0")}>Right (1, 0)</button>
      <button onClick={() => tape.left("#", "0")}>Left (#, 0)</button>
      <button onClick={() => tape.left("#", "1")}>Left (#, 1)</button>
      <button onClick={() => tape.left("0", "1")}>Left (0, 1)</button>
      <button onClick={() => tape.left("1", "0")}>Left (1, 0)</button>
      <button onClick={() => tape.up("#", "0")}>Up (#, 0)</button>
      <button onClick={() => tape.up("#", "1")}>Up (#, 1)</button>
      <button onClick={() => tape.up("0", "1")}>Up (0, 1)</button>
      <button onClick={() => tape.up("1", "0")}>Up (1, 0)</button>
      <button onClick={() => tape.down("#", "0")}>Down (#, 0)</button>
      <button onClick={() => tape.down("#", "1")}>Down (#, 1)</button>
      <button onClick={() => tape.down("0", "1")}>Down (0, 1)</button>
      <button onClick={() => tape.down("1", "0")}>Down (1, 0)</button>
      <button onClick={() => tape.print_tape()}>Print Tape</button>
      <button onClick={() => tape.print_keys()}>Print Keys</button>
      <button onClick={() => tape.print_head()}>Print Head</button>
    </div> 
  )
}

export default Tape2DTester