/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const numAsStr = String(x);
  const len = numAsStr.length;

  for (let i = 0; i < len / 2; i++) {
    if (numAsStr[i] !== numAsStr[len - i - 1]) {
      return false;
    }
  }

  return true;
};

// var isPalindrome = function(x) {
//     let clone = 0;

//     for (let i=x; i > 0; i= Math.floor(i/10)) {
//         clone = clone*10 + i%10;
//     }

//     return clone === x;
// };
