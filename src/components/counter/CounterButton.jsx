import { useState } from 'react'


export default function CounterButton({by, incrementFunction}){

    const [count, setCount] = useState(0);

    function incrementCounterFunction(){
        setCount(count+by)
        incrementFunction(by)
    }

    function decrementCounterFunction(){
        setCount(count-by)
        incrementFunction(-by)
    }

    return (
        <div>
            <div>
                <button className="counterButton" onClick={incrementCounterFunction}>+{by}</button>
                <button className="counterButton" onClick={decrementCounterFunction}>-{by}</button>
            </div>
        </div>
    )
}

