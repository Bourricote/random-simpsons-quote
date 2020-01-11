import React from 'react';
import axios from 'axios';
import './App.css';
import DisplayQuote from './components/DisplayQuote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    };
    this.getQuote = this.getQuote.bind(this);
    }
  
    getQuote() {
      axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(response => response.data)
        .then(data => {
          console.log(data[0]);
          this.setState({
            quote: data[0],
          });
        });
    }

  render() {
  return (
    <div className="App">
      <DisplayQuote quote={this.state.quote} />
      <button type="button" onClick={this.getQuote}>Get quote</button>
    </div>
    );
  }
}

export default App;
