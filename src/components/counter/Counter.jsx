import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter(){
    const [count, setCount]  = useState(0)

    function incrementTotalCounterFunction(by){
        setCount(count+by)
    }

    return (
        <>
            <span className='totalCount'>{count}</span>
            <CounterButton by={1} incrementFunction = {incrementTotalCounterFunction}/>
            <CounterButton by={2} incrementFunction = {incrementTotalCounterFunction}/>
            <CounterButton by={5} incrementFunction = {incrementTotalCounterFunction}/>
            <button className="resetButton" onClick={()=>{setCount(0)}}>Reset</button>
        </>
    )
}

