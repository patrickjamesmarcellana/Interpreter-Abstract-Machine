import Queue from "../data_structures/Queue"

function QueueTester() {
  const queue = new Queue("Q1")
  return (
    <div>
      <button title="Enqueue X" onClick={() => queue.write("X")}>Enqueue X</button>
      <button title="Enqueue Y" onClick={() => queue.write("Y")}>Enqueue Y</button>
      <button title="Print Queue" onClick={() => queue.log_queue()}>Print Queue</button>
      <button title="Get Queue" onClick={() => console.log(queue.peek())}>Peek Queue</button>
      <button title="Get In Front of Queue" onClick={() => console.log(queue.peek_in_front())}>Peek In Front of Queue</button>
      <button title="Dequeue Symbol" onClick={() => console.log(`Got symbol ${queue.read()}`)}>Dequeue</button>
    </div> 
  )
}

export default QueueTester