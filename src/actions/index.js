export function incrementCount() {
  return ({ type: 'INCREMENT'});
}

export function decrementCount() {
  return ({ type: 'DECREMENT'});
}

export function addNumberToCount(number) {
  return ({ type: 'ADD_NUMBER', number});
}

export function changeToRomCount(romNumber) {
    return ({ type: 'CHANGE_TO_ROM', romNumber});
}

export function changeToArbCount(arbNumber) {
  return ({ type: 'CHANGE_TO_ARB', arbNumber});
}
