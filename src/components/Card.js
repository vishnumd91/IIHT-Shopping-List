import React, { useState } from 'react';
import './Card.css';
import TextInput from './TextInput';

function Card(props) {

    const { title } = props;

    const [item, setItem] = useState('')

    const [list, setList] = useState([])


    const handleInputChange = (event) =>{
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

    const handleDeleteClick = () => {
        
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
                     <li key={index} className="list-group-item">{data}<span className='trash'><i onClick={handleDeleteClick} className="fas fa-trash-alt"></i></span></li>
                     
                </>
                )}
               
                
            </ul>
            <div className="card-header">
                <TextInput onChange={handleInputChange} onClick={handleClick} item={item}></TextInput>
            </div>
            </div>
        </div>
    )
}

export default Card
