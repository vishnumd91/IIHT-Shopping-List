import React, { useState, useEffect } from 'react';
import './Card.css';
import TextInput from './TextInput';

const Card = (props) => {

    const message = 'You have added no items yet!';

    const baseUrl = 'https://nodejs-api-shopping-list.herokuapp.com/items';

    const { title } = props;

    const [item, setItem] = useState('')

    const [list, setList] = useState([])

    useEffect(() => {
        fetchItems();
        }, [])

    async function fetchItems() {
        const getItems = await fetch(`${baseUrl}/getItems`);
        if (getItems.ok) {
            const response = await getItems.json();
            setList(response);    
        }
        else {
            return document.write(`${getItems.status} : ${getItems.statusText}`);
        }
    }

    const handleInputChange = (event) => {
        setItem(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        fetch(`${baseUrl}/postItems`, {
            method: 'POST',
            body: JSON.stringify({
                itemName: item,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(itemResponse => setList(list.concat(itemResponse)));
        setItem('')
    }

    const handleDeleteClick = (id) => {
        if (window.confirm('Are you sure about deleting this item?')) {
            fetch(`${baseUrl}/deleteItems/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res=> res.json())
            .then(() => fetchItems());    
        }
        return fetchItems();
    }

    return (
        <div className = 'cardStyle'>
            <div className="card">
                <div className="card-header">
                    {title}
                </div>

            {list.map((data) => {
                const { _id, itemName } = data;
                return(
                    <ul className="list-group list-group-flush">
                        <li key={_id} className="list-group-item">
                        {itemName}
                        <span className='trash'>
                        <i onClick={() => handleDeleteClick(_id)} className="fas fa-trash-alt"></i>
                        </span>
                    </li>
                    </ul>
                );})}

            {!list.length ? <p style={{marginLeft: '35px'}}>{message}</p> : null}
            <div className="card-header">
                <TextInput onChange={handleInputChange} onClick={handleClick} item={item}></TextInput>
            </div>
            </div>
        </div>
    )
}

export default Card
