import React from 'react';
import './style.css';

const Usestate = () => {
  const initialData = 10;
  const [Num, setNum] = React.useState(initialData);
  console.log(Num);
  return (
    <>
          <div className='center-div'>
          <p>{Num}</p>
        <div className='button' onClick={()=>setNum(Num+1)}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  INCR
              </div>
              <div className='button' onClick={() => (Num > 0 ? setNum(Num-1):setNum(0))}>
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

export default Usestate
