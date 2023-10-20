import React, { useState } from 'react'
import './Counter.css'
function Counter() {
    const [counter,setCounter] = useState(0)
    const increment = ()=>{
        setCounter(counter+1)
    }
    const decrement = ()=>{
        if (counter > 0) {
            setCounter(counter-1)
        }
    }
  return (
    <div className="counter__content py-5">
        <div className="container d-flex flex-column align-items-center justify-content-between">
            <h2>{counter}</h2>
            {console.log(counter)}
            <div className="btn__content w-50 d-flex justify-content-between">
                <button onClick={decrement} className='btn btn-danger w-25 btn-lg fw-bold'>-</button>
                <button onClick={increment} className='btn btn-success w-25 btn-lg fw-bold'>+</button>
            </div>
        </div>
    </div>
  )
}

export default Counter;