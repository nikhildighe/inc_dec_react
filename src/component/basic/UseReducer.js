import React from 'react';
import './style.css';

const reducer = (state, action) => {
    if (action.type === 'INCR') {
        state = state + 1;
    }
    if (state > 0 && action.type === 'DECR') {
        state = state - 1;
    }
    return state;

}


const UseReducer = () => {
    const initialData = 10;
    const [state, dispatch] = React.useReducer(reducer, initialData);
    //const [Num, setNum] = React.useState(initialData);
   // console.log(Num);
    return (
        <>
            <div className='center-div'>
                <p>{state}</p>
                <div className='button' onClick={() => dispatch({type:'INCR'})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className='button' onClick={() => dispatch({ type: 'DECR' })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>

            </div>
        </>
    )
}

export default UseReducer
