import React, { useState } from 'react'

function RegistrationForm() {
    const [textField, setTextField] = useState({firstName:'',lastName:'',email:''})
    
    const handleFirstName =(e)=>{
        setTextField({...textField,firstName:e.target.value});
    }
    const handleLastName =(e)=>{
        setTextField({...textField,lastName:e.target.value});
    }
    const handleEmail =(e)=>{
        setTextField({...textField,email:e.target.value});
    }

    const [submitted, setSubmission] = useState(false);
    const [isValid , setValidation] = useState(false);
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(textField.firstName&&textField.lastName&&textField.email){
            setValidation(true);
        }else{
            setValidation(false);
        }
        setSubmission(true);
    }
 
    return (
        <div>
            <form className='register-form' onSubmit={handleSubmit}>
                {submitted && isValid? <div className='register-message'>Thank you for register</div> : ''}
                <input type='text' placeholder='First Name' className='input-field' value={textField.firstName} onChange={handleFirstName} />
                {submitted && !textField.firstName?<span>Please add a first name</span>:null}
                <input type='text' placeholder='Last Name' className='input-field' value={textField.lastName} onChange={handleLastName}/>
                {submitted && !textField.lastName?<span>Please add a last name</span>:null}
                <input type='text' placeholder='Email' className='input-field' value={textField.email} onChange={handleEmail}/>
                {submitted && !textField.email?<span>Please add an email</span>:null}
                <input type='submit' value={'Submit'} className='input-field'/>
            </form>
        </div>
    )
}

export default RegistrationForm