import { combineReducers } from 'redux';

import counterNumber from './counterNumber';
import counterType from './counterType'

export default combineReducers({
  counterNumber, 
  counterType
});