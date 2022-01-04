// alert('React goes here');

import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render(){
        return (
            <h1>Running from React s</h1>
        )
    }
}

render(<App/>, document.getElementById('app'));


