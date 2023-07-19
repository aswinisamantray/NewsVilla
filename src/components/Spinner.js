import React from 'react'
import loading from './loading.gif'
const Spinner=()=>{
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{width:'4rem'}}/>
      </div>
    )

}

export default Spinner
