import React,{useState} from 'react'
import JSONDATA from '../data/MOCK_DATA.json'

function Search() {
    const [search, setSearch]= useState('');
  return (
    <div>
        <label id='first-name'>First name: </label><input type='text' placeholder='Search...' className='input' onChange={(e)=>{setSearch(e.target.value)}}/>
        {JSONDATA.filter((val)=>{
            if(search===''){
                return val;
            }else if(val.first_name.toLowerCase().includes(search.toLowerCase())){
                return val;
            }
        }).map((val)=>{
            return <div className='user' key={val.id}>
                <p>{val.first_name}</p>
            </div>
        })}
    </div>
  )
}

export default Search