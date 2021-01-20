import React, { useState } from 'react';
import './Card.css';
import TextInput from './TextInput';

function Card(props) {

    const message = 'You have added no items yet!';

    const { title } = props;

    const [item, setItem] = useState('')

    const [list, setList] = useState([])


    const handleInputChange = (event) => {
        setItem(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        setList(() => [
            ...list, 
            item
        ])
        setItem('')
    }

    const handleDeleteClick = (index) => {
        list.splice(index, 1)
        setList(() => [
            ...list,
        ])
    }

    return (
        <div className = 'cardStyle'>
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
            <ul className="list-group list-group-flush">
                {list.map((data, index) => 
                <>
                     <li key={index} className="list-group-item">
                        {data}
                        <span className='trash'>
                        <i onClick={() => handleDeleteClick(index)} className="fas fa-trash-alt"></i>
                        </span>
                    </li>
                     
                </>
                )}
               
                
            </ul>
            {list.length === 0 ? <p style={{marginLeft: '35px'}}>{message}</p> : null}
            <div className="card-header">
                <TextInput onChange={handleInputChange} onClick={handleClick} item={item}></TextInput>
            </div>
            </div>
        </div>
    )
}

export default Card
