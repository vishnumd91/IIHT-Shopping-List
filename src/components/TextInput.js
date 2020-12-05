import React from 'react'

function TextInput() {
    return (
        <div>
            <form className='from-group'>
                <input className='form-control' type='text' placeholder='Add Items' required='true'></input><br></br>
                <button type='submit' className='btn btn-success'>Add</button>
            </form>
            
        </div>
    )
}

export default TextInput
