const firstState = {
    typeLg: 'Abr' 
}

export default function counterType(state = firstState, action) {
    switch (action.type) {
        case 'CHANGE_TO_ROM':
            return action.obj
        case 'CHANGE_TO_ARB':
            return action.obj
        default: return state
    }
  }

/*
export default function counter(state = firstState, action) {
  switch(action.type) {
      case 'INCREMENT':
        return  action.obj
      case 'DECREMENT':
        return action.obj
      case 'ADD_NUMBER':
        return action.obj
      case 'CHANGE_TO_ROM':
        return action.obj
      case 'CHANGE_TO_ARB':
        return action.obj
      default: return state;
  }
}
*/