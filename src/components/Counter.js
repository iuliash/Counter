import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {incrementCount, decrementCount, addNumber, changeToRomCount, changeToArbCount} from '../actions';

class Counter extends React.Component {
    
    changeSystemCounter = () => {
        if (this.props.typeL === 'Abr')
          this.props.changeToRom();
        else if (this.props.typeL === 'Rim')
          this.props.changeToArb();
    }
  
    render() {
        return (
          <div id="count">
            <div className="changeSyst">
                <button className="App-buttons" onClick={this.changeSystemCounter}>{this.props.typeL}</button>
            </div>
            <div>
              <h1>{this.props.count}</h1>
              <button className="App-buttons" onClick={this.props.increment}>+1</button>
              <button className="App-buttons" onClick={this.props.decrement}>-1</button>
            </div>
            <div>
              <input className="App-input" type="text" id="inp"></input>
              <button className="App-buttons" onClick={this.props.addNumber}>Add</button>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter.count,
        typeL: state.counter.typeLg
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        increment: incrementCount,
        decrement: decrementCount,
        addNumber: addNumber, 
        changeToRom: changeToRomCount, 
        changeToArb: changeToArbCount
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);