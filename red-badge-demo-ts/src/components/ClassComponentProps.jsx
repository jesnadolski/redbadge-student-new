//Create a class component based on the functionalProps.jsx file
//Keep the usage of destructuring props in this challenge.
import React, { Component } from 'react';
import {Alert, Container} from 'reactstrap';

class ClassComponentProps extends Component {
    render(){
        const numbers = () => this.props.numbers.map((number, index) => <Alert key={index} color={number % 2 === 0? "success" : "danger"}>
        The number is {number}
    </Alert>)
        return(
            <Container>
                <h3>From the Class Component</h3>
                {numbers()}
            </Container>
            
            
        )
    }
};

export default ClassComponentProps;

