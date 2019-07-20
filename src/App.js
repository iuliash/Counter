import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

var i = 0;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="count">
          <h1>{i}</h1>
        </div>
        <div>
          <button className="App-buttons" onclick={incCounter()}>+1</button>
          <button className="App-buttons" onclick={decCounter()}>-1</button>
        </div>
        <div>
          <input className="App-input" type="text"></input>
          <button className="App-buttons" onclick={addNum()}>Add</button>
        </div>
      </header>
    </div>
  );
}

function incCounter() {
  i++;
}

function decCounter() {

}

function addNum(){

}

export default App;
