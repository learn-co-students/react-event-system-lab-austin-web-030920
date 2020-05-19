// Code Keypad Component Here
import React, { Component } from 'react';



class Keypad extends Component {

    strokeUp = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.strokeUp} />
            </div>
        );
    }
}





export default Keypad;
