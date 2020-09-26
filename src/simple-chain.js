const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (position > this.arr.length - 1 || typeof (position) != 'number') {
      this.arr = [];
      throw new Error('Error');
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = '( ' + this.arr[i] + ' )';
    }
    let str = this.arr.join('~~');
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;