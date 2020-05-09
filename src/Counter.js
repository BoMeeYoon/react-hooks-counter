import React, { useState }  from 'react'
import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md"
import './Counter.css'

function Counter () {

    const [count, setCount] = useState(0);

    const onIncrease = () => setCount(count+1)
    const onDecrease = () => setCount(count-1)

    return (
        <div className="wrapper">
            <h1 className="counter">{count}</h1>
            <div className="btns">
                <button onClick={onIncrease}><MdExposurePlus1/></button>
                <button onClick={onDecrease}><MdExposureNeg1/></button>
            </div>
        </div>
    )

}

export default Counter