import React,{useState} from 'react'

function Temperature() {
    const initialTemp = 10;
    const initialState = 'cold';
    const [temp, setTemp]=useState(initialTemp);
    const [tempStat, setTempState]= useState(initialState);
    const increaseTemp = ()=>{
        
        let newTemp = temp+1;
        setTemp(newTemp);
        
        if(newTemp>=15){
            setTempState('hot');
        }
        if(temp>=20){
            setTemp(initialTemp);
            setTempState(initialState);
        }
    }

    const decreaseTemp = ()=>{
        let newTemp = temp-1;
        setTemp(newTemp);
        if(temp<=0){
            setTemp(initialTemp);
            setTempState(initialState);
        }
        if(newTemp<15){
            setTempState('cold');
        }
    }
  return (
    <div className='container'>
        <div className={`circle ${tempStat}`}>
            <div className='tempText'>{temp} &#8451;</div>
        </div>
        <div className='btnContainer'>
        <button onClick={()=>increaseTemp()}>+</button>
        <button onClick={()=>decreaseTemp()}>-</button>
        </div>
    </div>
  )
}

export default Temperature