import React, { useState, useEffect } from 'react';
import './Card.css';
import TextInput from './TextInput';

const Card = (props) => {

    const message = 'You have added no items yet!';

    const { title } = props;

    const [item, setItem] = useState('')

    const [list, setList] = useState('')

    const lists = Array.from(list);

    useEffect(() => {
        async function fetchItems() {
            const getItems = await fetch('/items/getItems');
            if (getItems.ok) {
                const response = await getItems.json();
                const itemList = response.map(inputs => inputs.itemName);
                setList(itemList);    
            }
            else {
                return document.write(`${getItems.status} : ${getItems.statusText}`);
            }
        }
        fetchItems();
        }, [])

    const handleInputChange = (event) => {
        setItem(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        fetch('/items/postItems', {
            method: 'POST',
            body: JSON.stringify({
                itemName: item,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json());
        setList(() => [
            ...lists,
            item
        ])
        setItem('')
    }

    const handleDeleteClick = (index) => {
        lists.splice(index, 1)
        setList(() => [
            ...lists,
        ])
    }

    return (
        <div className = 'cardStyle'>
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
            <ul className="list-group list-group-flush">
                {lists.map((data, index) => 
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
            {!list.length ? <p style={{marginLeft: '35px'}}>{message}</p> : null}
            <div className="card-header">
                <TextInput onChange={handleInputChange} onClick={handleClick} item={item}></TextInput>
            </div>
            </div>
        </div>
    )
}

export default Card
