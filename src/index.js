import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import './App.css'

import Counter from './components/Counter'
import reducers from './reducers'

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Provider store={createStore(reducers)}>
                    <Counter />
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

/*
добавить рычажок, по нажатию на который будет что-то менятся на странице
это может быть текст или язык 
*/

