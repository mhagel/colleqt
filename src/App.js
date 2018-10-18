import React, { Component } from 'react';
import './App.css';
import { NewQuote } from './components/NewQuote';
import QuoteCollection from './components/QuoteCollection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quotes: []
    };

    this.addToCollection = this.addToCollection.bind(this);
  }

  addToCollection(quote) {
    var quotes = this.state.quotes;
    quotes.push(quote)
    this.setState({quotes: quotes});
  }

  render() {
    return (
      <div className="App">
        <h1 className="AppHeader">Quote Collector</h1>
        <NewQuote onAdd={this.addToCollection}/>
        <QuoteCollection quotes={this.state.quotes}/>
      </div>
    );
  }
}

export default App;
