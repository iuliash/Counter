const firstStateCount = {
    count: 0,
    typeLg: 'Abr' 
}

export default function counter(state = firstStateCount, action) {
    let {count} = state;
    switch(action.type) {
      case 'INCREMENT':
        return  Object.assign({}, state, {count: count + 1})
      case 'DECREMENT':
        return Object.assign({}, state, {count: count - 1})
      case 'ADD_NUMBER':
        return Object.assign({}, state, {count: count + action.number})
      case 'CHANGE_TO_ROM':
        return Object.assign({}, state, {count: action.romNumber, typeLg: 'Rom'})
      case 'CHANGE_TO_ARB':
        return Object.assign({}, state, {count: action.arbNumber, typeLg: 'Abr'}) 
      default: return state;
      }
  }
  