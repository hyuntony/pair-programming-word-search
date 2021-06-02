const transpose = function(matrix) {
  let temp = [];
  
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (x === 0) {
        temp.push([matrix[x][y]]);
      } else {
        temp[y].push(matrix[x][y]);
      }
    }
  }
  return temp;
};

module.exports = transpose;