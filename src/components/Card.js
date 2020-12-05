import React from 'react';
import './Card.css';
import TextInput from './TextInput';

function Card() {
    return (
        <div className = 'cardStyle'>
            <div className="card" Style="width: 18rem;">
                <div className="card-header">
                    Shopping List
                </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Laptop</li>
                <li className="list-group-item">Mobile</li>
                <li className="list-group-item">TV</li>
            </ul>
            <div className="card-header">
                <TextInput></TextInput>
            </div>
            </div>
        </div>
    )
}

export default Card
