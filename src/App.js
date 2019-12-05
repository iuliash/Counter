import React, {Component} from 'react';
import './App.css';

class Counter extends React.Component {  
  constructor(){  
    super();  
    this.state = {  
        count : 0,
    }; 
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this); 
    this.addNumber = this.addNumber.bind(this); 
  }

  incrementCounter() {
    this.setState({
      count : this.state.count + 1
    })
  }

  decrementCounter() {
    this.setState({
      count : this.state.count - 1
    })
  }

  addNumber(){
    var text = document.getElementsByTagName("input")[0];
    var val=parseInt(text.value);
    this.setState({
      count : this.state.count + val
    })
  }


  render() {
    return (
      <div id="count">
        <div>
          <h1>{this.state.count}</h1>
          <button className="App-buttons" onClick={this.incrementCounter}>+1</button>
          <button className="App-buttons" onClick={this.decrementCounter}>-1</button>
        </div>
        <div>
          <input className="App-input" type="text"></input>
          <button className="App-buttons" onClick={this.addNumber}>Add</button>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
