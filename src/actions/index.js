export function incrementCount() {
  return ({ type: 'INCREMENT'});
}

export function decrementCount() {
  return ({ type: 'DECREMENT'});
}

export function addNumber() {
  return ({ type: 'ADD_NUMBER'});
}

export function changeToRomCount() {
    return ({ type: 'CHANGE_TO_ROM'});
}

export function changeToArbCount() {
  return ({ type: 'CHANGE_TO_ARB'});
}