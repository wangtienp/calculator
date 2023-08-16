import React ,{useState} from 'react'

function AddWithArray() {
    const [numArray, setArray] = useState([]);
    const addNumber = ()=>{
        setArray([...numArray,{
          value:`Entry ${Math.floor(Math.random()*10)+1}`,
          id:numArray.length
        }])
    }
  return (
    <div>
        <button onClick={addNumber}>Add number</button>
        <ul>
            {numArray.map((num)=><li key={num.id}>{num.value}</li>)}
        </ul>
    </div>
  )
}

export default AddWithArray