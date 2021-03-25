import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props){
        super(props);
        this.state = {currentTemp: '78', location: 'Indiana'};
        // this.handleClick = this.handleClick.bind(this);
        //you need this anytime you use a method in state
    }

    // handleClick() {
    //     this.setState({currentTemp: '48'});
        //inside () is an object with key/value pairs

    handleClick =() => {
        this.setState({currentTemp: '25'});
        //inside () is an object with key/value pairs
    };

    render(){
        return(
            <div>The current temp is {this.state.currentTemp} - in {""}{this.state.location}
            <button onClick={this.handleClick}>Click Me to Change Temp</button>
            </div>
        )
    }
}

export default StateExample;