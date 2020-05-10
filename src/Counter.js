import React, { useReducer }  from 'react'
import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md"
import './Counter.css'

function reducer(count, action) {
    switch (action.type) {
        case 'INCREMENT': 
            return count + 1;
        case 'DECREMENT':
            return count - 1;
        default:
            throw new Error();
    }
}


function Counter () {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div className="wrapper">
            <h1 className="counter">{count}</h1>
            <div className="btns">
                <button onClick={ () => dispatch( { type: 'INCREMENT' } ) }><MdExposurePlus1/></button>
                <button onClick={ () => dispatch( { type: 'DECREMENT' } ) }><MdExposureNeg1/></button>
            </div>
        </div>
    )

}

export default Counter