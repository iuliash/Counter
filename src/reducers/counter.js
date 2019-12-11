import {handleChange, convertToRim, convertToArb} from './counterFunction'

const firstStateCount = {
    count: 0,
    typeLg: 'Abr' 
}

export default function counter(state = firstStateCount, action) {
    switch(action.type) {
      case 'INCREMENT':
        return handleChange(state, 1);
      case 'DECREMENT':
        return handleChange(state, -1);
      case 'ADD_NUMBER':
        return handleChange(state);
      case 'CHANGE_TO_ROM':
        return convertToRim(state);
      case 'CHANGE_TO_ARB':
        return convertToArb(state);
      default:
        return state;
    }
  }

  