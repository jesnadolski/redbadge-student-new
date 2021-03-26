import React, { Component } from 'react';

class ClassDeckFetch extends Component{
    
    constructor(props){
        super(props);
        this.state = {deckID: ''};
    }

    fetchDeck(){
        //first need the url to fetch
        //then need to store the data

        const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

        fetch(url)
        .then((res) => res.json())
        .then((json) => this.setState({deckID: json.deck_id}));
    }

    fetchCard(){
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`;

        fetch(url)
        .then((res) => res.json())
        .then((json) => this.setState({cardImage: json.cards[0].image}));
    }

    componentDidMount() {
        //cdm + tab
        this.fetchDeck();
    }

    componentDidUpdate(prevProps, prevState) {
        //cdu + tab
       
        if(prevState.deckID !== this.state.deckID){
            this.fetchCard()
        }
    }

    render(){
        return(
            <div>
                <img src={this.state.cardImage} alt="null"/>
            </div>
        )
    }
}

export default ClassDeckFetch;