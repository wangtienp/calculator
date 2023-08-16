import React  from 'react'

function Contact(props) {

    return (
        <div className='container'>
            <div className='img-container'>
                <img src='https://placehold.jp/150x150.png' alt='profile' />
            </div>
            <div className='info-container'>
                <p>Name: {props.name} </p>
                <p>Email : {props.email}</p>
                {/* <p> Age : {age}</p> */}
            </div>

        </div>
    )
}

export default Contact