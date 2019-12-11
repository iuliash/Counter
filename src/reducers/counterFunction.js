const font_ar = [1,5,10,50,100,500,1000];
const font_rom = ["I","V","X","L","C","D","M"];

export function handleChange(state, change) {
    const {count} = state;
    const {typeLg} = state;
    if (typeLg === 'Abr') {
      if (change) {
        return ({
          count: count + change,
          typeLg: 'Abr'
        })
      } else {
        var text = document.getElementById('inp');
        var val=parseInt(text.value);
        return({
          count: count + val,
          typeLg: 'Abr'
        })
      }
    }
}

export function convertToRim(state) {
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

export function convertToArb(state) {
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