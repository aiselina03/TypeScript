import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    function increaseCount(num:number) {
        setCount(count + num)
    }
    function decreaseCount(num:number) {
        setCount(count - num)
    }
  return (
    <>
        <h1>Counter</h1>
        <button onClick={()=>increaseCount(10)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>decreaseCount(5)}>-</button>
    </>
  )
}

export default Counter