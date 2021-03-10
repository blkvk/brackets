module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let openBr = [],
      closeBr = [],
      array = str.split('');
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBr.push(bracketsConfig[i][0]);
    closeBr.push(bracketsConfig[i][1]);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < bracketsConfig.length; j++) {
        if (array[i] === openBr[j] && array[i + 1] === closeBr[j]) {
            array.splice(i, 2);
        }
    }
  }
  return (array.length === 0);
} 