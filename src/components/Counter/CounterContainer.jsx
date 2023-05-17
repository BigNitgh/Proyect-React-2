import { useState } from "react"
import CounterPresentation from "./CounterPresentation";

const CounterContainer = () => {
    const [counter, setCounter] = useState(0);

    const sumar = () => {
        setCounter(counter + 1)
    };
    
    const restar = ()=> {
        setCounter (counter - 1)
    }
  return (
    <div>
        <CounterPresentation/>
    </div>
  )
}

export default CounterContainer