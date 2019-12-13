export function incrementCount(obj) {
  return ({ type: 'INCREMENT', obj});
}

export function decrementCount(obj) {
  return ({ type: 'DECREMENT', obj});
}

export function addNumberToCount(obj) {
  return ({ type: 'ADD_NUMBER', obj});
}

export function changeToRomCount(obj) {
    return ({ type: 'CHANGE_TO_ROM', obj});
}

export function changeToArbCount(obj) {
  return ({ type: 'CHANGE_TO_ARB', obj});
}

export function changeNumberCount(obj) {
  return ({ type: 'CHANGE_NUMBER', obj});
}