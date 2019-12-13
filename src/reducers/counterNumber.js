const firstState = {
    count: 0
}

export default function counterNumber(state = firstState, action) {
  switch (action.type) {
      case 'INCREMENT':
        return  action.obj
      case 'DECREMENT':
        return action.obj
      case 'ADD_NUMBER':
        return action.obj
      case 'CHANGE_NUMBER':
        return action.obj
      default: return state
  }
}