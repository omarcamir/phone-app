// import React, { useState } from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import {decrement, increment} from '../../redux/slices/counterSlice'
function Counter() {
    //dispatch action
    const dispatch = useDispatch();

    /* const [counter,setCounter] = useState(0)
    const increment = ()=>{
        setCounter(counter+1)
    }
    const decrement = ()=>{
        if (counter > 0) {
            setCounter(counter-1)
        }
    }
    */
    const handleIncrement = ()=>{
        dispatch(increment())
    }
    const handleDecrement = ()=>{
        dispatch(decrement())
    }

    //Global State with global action
    const counterGlobalState = useSelector(store => store.counter.counter)
    console.log(counterGlobalState)
    //STATE Global
    //increment Action
    //decrement Action
  return (
    <div className="counter__content py-5">
        <div className="container d-flex flex-column align-items-center justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
                <span className='fs-2 me-3 fw-bold text-secondary'>Donated: </span>
                <h2>{counterGlobalState}</h2>
                <span className='fs-2 ms-3 fw-bold text-success'>$</span>
            </div>
            <div className="btn__content w-50 d-flex justify-content-between">
                <button onClick={handleDecrement} className='btn btn-danger w-25 btn-lg fw-bold'>-</button>
                <button onClick={handleIncrement} className='btn btn-success w-25 btn-lg fw-bold'>+</button>
            </div>
        </div>
    </div>
  )
}

export default Counter;