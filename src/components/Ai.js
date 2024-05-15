// Create a AI assistant using stack ai as a functional react component

import React from 'react';
import ReactDOM from 'react-dom';
import { createAssistant } from 'react-stack-ai';

import './index.css';

const Assistant = createAssistant({
    // Your stack ai api key
});

ReactDOM.render(
    <Assistant />,
    document.getElementById('root')
);