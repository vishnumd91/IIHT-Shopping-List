import { cleanup } from "@testing-library/react";
import React from "react";
import ReactDOM from 'react-dom';
import Card from '../Card';

afterEach(cleanup);

it('Card renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card></Card>, div);
} )