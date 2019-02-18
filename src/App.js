import React, { Component } from 'react';
import KiteSurfClient from './KiteSurfClient';

const kiteSurfClient = new KiteSurfClient();
class App extends Component {
    render() {
        const surf = kiteSurfClient.canISurf();
        return (
            <div className="App" style={surf === "yes" ? {color: 'green'} : {color: 'red'}}>
                KITESURF {surf}
            </div>
        );
    }
}

export default App;