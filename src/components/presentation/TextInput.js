import React from 'react'

function TextInput(props) {

    const {onChange, onClick, item} = props

    return (
        <div>
            <form className='from-group' onSubmit={onClick}>
                <input className='form-control' value={item} type='text' onChange={onChange} placeholder='Add Items' required></input>
                <br></br>
                <button data-testid = 'button_test' type='submit' className='btn btn-success'>Add</button>
            </form>
            
        </div>
    )
}

export default TextInput
