import React from 'react';
import axios from 'axios';
import './App.css';
import DisplayQuote from './components/DisplayQuote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null
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

  componentDidMount() {
    this.getQuote();
  }

  render() {
  return (
    <div className="App">
      {
        this.state.quote 
          ? <DisplayQuote quote={this.state.quote} />
          : <p>Loading...</p>
      }
      <button type="button" onClick={this.getQuote}>Get quote</button>
    </div>
    );
  }
}

export default App;
