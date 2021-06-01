import { cleanup, getByTestId, render } from "@testing-library/react";
import React from "react";
import ReactDOM from 'react-dom';
import TextInput from '../TextInput';

afterEach(cleanup);

it('TextInput renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextInput></TextInput>, div);
} )