import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {incCount, decCount, addNum, changeSyst} from '../actions';

class Counter extends React.Component {
    render() {
        return (
          <div id="count">
            <div className="changeSyst">
                <button className="App-buttons" onClick={this.props.onChange}>{this.props.typeL}</button>
            </div>
            <div>
              <h1>{this.props.count}</h1>
              <button className="App-buttons" onClick={this.props.onIncrement}>+1</button>
              <button className="App-buttons" onClick={this.props.onDecrement}>-1</button>
            </div>
            <div>
              <input className="App-input" type="text" id="inp"></input>
              <button className="App-buttons" onClick={this.props.onAddNumber}>Add</button>
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
        onIncrement: incCount,
        onDecrement: decCount,
        onAddNumber: addNum, 
        onChange: changeSyst
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);