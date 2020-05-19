// Code EyesOnMe Component Here
import React, { Component } from 'react';


class EyesOnMe extends Component {

    blu = (e) => {
        console.log("Hey! Eyes on me!")
    }

    foc = (e) => {
        console.log('Good!')
    }

    render() {

        return (
            <div>
                <button onBlur={this.blu} onFocus={this.foc} >buttson</button>
            </div>
        );
    }
}





export default EyesOnMe;
