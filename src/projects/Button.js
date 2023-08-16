import React, {useState} from 'react'

const Button = () => {

const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>setCount(prev=>prev + 1)}>+</button>
        <button onClick={()=>setCount(prev=>prev - 1)}>-</button>
        <p>{count}</p>
    </div>
  )
}

export default Button
