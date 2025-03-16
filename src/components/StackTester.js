import Stack from "../data_structures/Stack"

function StackTester(stack) {
  return (
    <div>
      <h1>{stack.name}</h1>
      <button title="Push X" onClick={() => stack.write("X")}>Push X</button>
      <button title="Push Y" onClick={() => stack.write("Y")}>Push Y</button>
      <button title="Print Stack" onClick={() => stack.log_stack()}>Print Stack</button>
      <button title="Get Stack" onClick={() => console.log(stack.peek())}>Peek Stack</button>
      <button title="Read Symbol" onClick={() => console.log(`Got symbol ${stack.read()}`)}>Pop</button>
      <br/>
    </div> 
  )
}

export default StackTester