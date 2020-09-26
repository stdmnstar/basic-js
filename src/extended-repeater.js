const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.repeatTimes === undefined) {
    return str + options.addition;
  }
  const separator = (options.separator) ? String(options.separator) : '+';
  const addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes;
  const additionSeparator = (options.additionSeparator) ? String(options.additionSeparator) : '|';
 
  const repeatTimes = options.repeatTimes;

  
  let result = '';
  let addStr = '';

  for (let i = 0; i < additionRepeatTimes - 1; i += 1) {
    addStr += addition + additionSeparator;
  }
  if (additionRepeatTimes > 0) {
    addStr += addition;
  }

  for (let i = 0; i < repeatTimes - 1; i += 1) {
    result += str + addStr + separator;
  }

  if (repeatTimes > 0) {
    result += str + addStr;
  }

  return result;
};