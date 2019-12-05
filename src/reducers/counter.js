import {INCREMENT, DECREMENT, ADD_NUMBER} from '../actions/index';

const firstState = {
    count: 0
}

function handleChange(state, change) {
    const {count} = state;
    return ({
      count: count + change,
    })
}

export default function counter(state = firstState, action) {
    switch(action.type) {
      case INCREMENT:
        return handleChange(state, 1);
      case DECREMENT:
        return handleChange(state, -1);
      case ADD_NUMBER:
        {
            var text = document.getElementById('inp');
            var val=parseInt(text.value);
            
            return handleChange(state, val);;
        }
      default:
        return state;
    }
  }