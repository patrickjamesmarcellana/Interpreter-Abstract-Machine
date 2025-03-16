import {scan, print, scan_right, scan_left, read, write, right, left, up, down} from "../machine_essentials/Transitions"
import InputTape from "../data_structures/InputTape"
import OutputTape from "../data_structures/OutputTape"
import Queue from "../data_structures/Queue"
import Stack from "../data_structures/Stack"
import Tape1D from "../data_structures/Tape1D"
import Tape2D from "../data_structures/Tape2D"

import InputTapeTester from "./InputTapeTester"
import OutputTapeTester from "./OutputTapeTester"
import QueueTester from "./QueueTester"
import StackTester from "./StackTester"
import TapeTester from "./TapeTester"
import Tape2DTester from "./Tape2DTester"

function TransitionsTester() {

  const IT1 = new InputTape("T1", "000111")
  const IT2 = new InputTape("T2", "01")

  const ITT1 = InputTapeTester(IT1)
  const ITT2 = InputTapeTester(IT2)

  const OT1 = new OutputTape("OT1")
  const OT2 = new OutputTape("OT2")

  const OTT1 = OutputTapeTester(OT1)
  const OTT2 = OutputTapeTester(OT2)

  const S1 = new Stack("S1")
  const Q1 = new Queue("Q1")

  const STT1 = new StackTester(S1)
  const STT2 = new StackTester(Q1)

  const T1D1 = new Tape1D("T1", true)
  const T2D1 = new Tape2D("T2", true)

  const T2DT1 = new Tape2DTester(T1D1)
  const T2DT2 = new Tape2DTester(T2D1)

  return (
    <div>
      {/* {ITT1} */}
      {/* {ITT2} */}
      
      {/* {OTT1}
      {OTT2} */}

      {/* {STT1}
      {STT2} */}

      {T2DT1}
      {T2DT2}
    </div> 
  )
}

export default TransitionsTester