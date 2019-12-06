import {INCREMENT, DECREMENT, ADD_NUMBER, CHANGE_SYSTEM} from '../actions';

const firstStateCount = {
    count: 0,
    typeLg: 'Abr' 
}

function handleChange(state, change) {
    const {count} = state;
    const {typeLg} = state;
    if (typeLg === 'Abr') {
      return ({
        count: count + change,
        typeLg: 'Abr'
      })
    }
}

const font_ar = [1,5,10,50,100,500,1000];
const font_rom = ["I","V","X","L","C","D","M"];

function convertToRim(state) {
  let {count} = state;
  if (!count) return "";
  var st = "";
  var n = font_ar.length - 1;
  while (count > 0) {
     if (count >= font_ar[n]) {
         st += font_rom[n];
         count -= font_ar[n];
     }
     else n--;
  }
  return ({
    count: st,
    typeLg: 'Rim'
  })
}

function convertToArb(state) {
  let {count} = state;
  var rezult = 0;
  var posit = 0;
  var n = font_ar.length - 1;
  while (n >= 0 && posit < count.length) {
    if (count.substr(posit, font_rom[n].length) == font_rom[n]) {
        rezult += font_ar[n];
        posit += font_rom[n].length;
    }
    else n--;
  }
  return ({
    count: rezult,
    typeLg: 'Abr'
  })
}

export default function counter(state = firstStateCount, action) {
    switch(action.type) {
      case INCREMENT:
        return handleChange(state, 1);
      case DECREMENT:
        return handleChange(state, -1);
      case ADD_NUMBER:
        {
          var text = document.getElementById('inp');
          var val=parseInt(text.value);
          return handleChange(state, val);
        }
      case CHANGE_SYSTEM:
        {
          const {typeLg} = state;
          if (typeLg === 'Abr') 
            return convertToRim(state);
          else if (typeLg === 'Rim') 
            return convertToArb(state);
          else 
            return state;
        }
      default:
        return state;
    }
  }

  /*while (count != 0) {
      if (count > 1000 || count === 1000) {
        st += 'M'
        count -= 1000;
      } else if (count > 500 || count === 500) {
        st += 'D';
        count -= 500;
      } else if (count > 100 || count === 100) {
        st += 'C';
        count -= 100;
      } else if (count > 50 || count === 50) {
        st +=  'L';
        count -= 50;
      } else if (count > 10 || count === 10) {
        st +=  'X';
        count -= 10;
      } else if (count > 5 || count === 5) {
        st +=  'V';
        count -= 5;
      } else if (count > 1 || count === 1) {
        st +=  'I';
        count -= 1;
      }
    }*/

  