const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0) {
          newArr.push(arr[i - 1]);
        }
        break;
      case '--discard-next':
        if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
          i += 2;
        } else {
          i++;
        }
        break;
      case '--discard-prev':
        if (i > 0) {
          newArr.pop();
        }
        break;
      default:
        newArr.push(arr[i]);
        break
    }
  }
  return newArr;
};