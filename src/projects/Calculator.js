import React ,{useState} from 'react'
import { evaluate } from 'mathjs'

function Calculator() {
    const [isEqualPushed, setIsEqualPushed] = useState(false)
    const [operand, setOperand] = useState('')

    const ops=['+','-','X' ,'/','.']
    const handleInput = value =>{
        if(ops.includes(value)&& operand ==='' ||
        ops.includes(value) && ops.includes(operand.slice(-1))) return
        if(isEqualPushed){
            setIsEqualPushed(false)
            if(!ops.includes(value)){
                setOperand(value)
            }else{
                setOperand(operand+value) 
            }     
        }
        else{
            setOperand(operand+value) 
        }
             
    }
    const handleEqual =()=>{
        if(operand==='') return;
        let newOperand =operand
        if(newOperand.includes('X')){
            newOperand = newOperand.replace('X','*')
        }
        setOperand(evaluate(newOperand).toString())
        setIsEqualPushed(true);              
    }
    const handleClear = ()=>{
        setOperand('')
    }
    return (
        <div className='calculator-wrapper'>
            <div className='output-container'>
                <div className='current-text'>{operand}</div>
                </div>
            <div className='input-buttons'>
                <div className='row'>
                    <button  onClick={()=>handleInput('7')}>7</button>
                    <button onClick={()=>handleInput('8')}>8</button>
                    <button onClick={()=>handleInput('9')}>9</button>
                    <button className='operator' onClick={()=>handleInput('/')}>/</button>
                </div>
                <div className='row'>
                    <button onClick={()=>handleInput('4')}>4</button>
                    <button onClick={()=>handleInput('5')}>5</button>
                    <button onClick={()=>handleInput('6')}>6</button>
                    <button className='operator' onClick={()=>handleInput('X')}>X</button>
                </div>
                <div className='row'>
                    <button onClick={()=>handleInput('1')}>1</button>
                    <button onClick={()=>handleInput('2')}>2</button>
                    <button onClick={()=>handleInput('3')}>3</button>
                    <button className='operator' onClick={()=>handleInput('+')} >+</button>
                </div>
                <div className='row'>
                    <button onClick={()=>handleInput('.')} >.</button>
                    <button onClick={()=>handleInput('0')}>0</button>
                    <button onClick={handleEqual}>=</button>
                    <button className='operator' onClick={()=>handleInput('-')}>-</button>
                </div>

            </div>
            <div className='reset-button'>
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    )
}

export default Calculator