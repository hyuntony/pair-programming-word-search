const transpose = require('./transpose');
const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  //Horizontal
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  //Vertical
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  
  //ReversedHorizontal
  const reversedHorizontalArray = [];
  for (let str of letters) {
    reversedHorizontalArray.push(str.reverse());
  }
  const reversedHorizontalJoin = reversedHorizontalArray.map(ls => ls.join(''));

  //ReversedVertical
  const reversedVerticalArray = [];
  for (let str of verticalJoin) {
    const splitted = str.split('');
    reversedVerticalArray.push(splitted.reverse());
  }
  const reversedVerticalJoin = reversedVerticalArray.map(ls => ls.join(''));


  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

 
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  
  for (let l of reversedHorizontalJoin) {
    if (l.includes(word)) return true;
  }

  
  for (let l of reversedVerticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
    
};
/*
const letters = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', ' F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
]; */


//const mapresult = letters.map(ls => ls.join(''));
//console.log(mapresult);
//const reversedArray = [];
//for (let str of letters) {
//reversedArray.push(str.reverse());
//}
//console.log(reversedArray);
// const diagonalArray = [];
// Math.floor((letters.length) / 2) 
//first array letters[0][0]
//second array [letters[1][0], letters[0][1]]
//third array [letters[2][0], letters[1][1], letters[0][2]]
//fourth array [letters[3][0]], letters[2][1], letters[1][2], letters [0][3]
/*
const temparray = []
const arr = [
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5],
  [1,2,3,4,5]
];


for (i = 0; i < arr.length; i++) {
  temparray.push(arr[i][i]);
}
t

let k = arr.length - 1
for (i = 0; i < arr.length; i++) {
  temparray.push(arr[i][k]);
  k--;
}
emparRTCIdentityAssertion.join(''); */
module.exports = wordSearch;

