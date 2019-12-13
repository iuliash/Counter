import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {incrementCount, decrementCount, addNumberToCount, changeToRomCount, changeToArbCount} from '../actions';

class Counter extends React.Component {
    
    changeSystemCounter = () => {
        const font_ar = [1,5,10,50,100,500,1000];
        const font_rom = ["I","V","X","L","C","D","M"];
        let _count = this.props.count;
        let _typeL = this.props.typeL;
        if (_typeL === 'Abr') 
        {
          if (!_count) return "";
          let st = "";
          let n = font_ar.length - 1;
          while (_count > 0) {
             if (_count >= font_ar[n]) {
                 st += font_rom[n];
                 _count -= font_ar[n];
             }
             else n--;
          }
          this.props.changeToRom(st);
        } 
        else if (_typeL === 'Rom') 
        {
          let rezult = 0;
          let posit = 0;
          let n = font_ar.length - 1;
          while (n >= 0 && posit < _count.length) {
            if (_count.substr(posit, font_rom[n].length) == font_rom[n]) {
                rezult += font_ar[n];
                posit += font_rom[n].length;
            }
            else n--;
          }
          this.props.changeToArb(rezult); 
        }
    }

    takeNumber = () => {
      let text = document.getElementById('inp');
      let val = parseInt(text.value);
      this.props.addNumber(val);
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
              <button className="App-buttons" onClick={this.takeNumber}>Add</button>
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
        addNumber: addNumberToCount, 
        changeToRom: changeToRomCount, 
        changeToArb: changeToArbCount
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);