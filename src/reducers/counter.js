const firstStateCount = {
    count: 0,
    typeLg: 'Abr' 
}

export default function counter(state = firstStateCount, action) {
    let {count} = state;
    switch(action.type) {
      case 'INCREMENT':
        return  ({
          count: count + 1,
          typeLg: 'Abr'
        });
      case 'DECREMENT':
        return ({
          count: count - 1,
          typeLg: 'Abr'
        });
      case 'ADD_NUMBER':
        return ({
          count: count + action.number,
          typeLg: 'Abr'
        });
      case 'CHANGE_TO_ROM':
        return ({
          count: action.romNumber,
          typeLg: 'Rim'
        });  
      case 'CHANGE_TO_ARB':
        return ({
          count: action.arbNumber,
          typeLg: 'Abr'
        });  
      default:
        return state;
    }
  }

  