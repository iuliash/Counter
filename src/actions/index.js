export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_NUMBER = 'ADD_NUMBER';
export const CHANGE_SYSTEM = 'CHANGE_SYSTEM';

export function incCount() {
  return ({ type: INCREMENT});
}

export function decCount() {
  return ({ type: DECREMENT});
}

export function addNum() {
  return ({ type: ADD_NUMBER});
}

export function changeSyst() {
    return ({ type: CHANGE_SYSTEM});
}