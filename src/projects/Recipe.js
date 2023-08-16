import React from 'react'

function Recipe({ name, imgURL, ingredients }) {

    return (

        <div className='recipe-container'>
            <div className='title-container'>
                <h2 className='title'>{name}</h2>
            </div>
            <div className='image-container'>
                <img src={imgURL} className='recipe-image' />
            </div>
            <ol className='ingredients'>
                {ingredients.map(ingredient => {
                    return (
                        <li key={Math.random() * 10000}>{ingredient.text}</li>
                    )
                })}
            </ol>
        </div>

    )
}

export default Recipe