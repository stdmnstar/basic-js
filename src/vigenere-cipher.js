const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }


  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Error');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arr = [];
    let keyStep = -1;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i].toUpperCase()) > -1) {
        keyStep++;
        let number = (alphabet.indexOf(message[i].toUpperCase()) + alphabet.indexOf(key[keyStep % key.length].toUpperCase())) % alphabet.length;
        arr.push(alphabet[number]);
      } else {
        arr.push(message[i]);
      }
    }    
    if (this.direct) {
      return arr.join('');
    } else {
      return arr.reverse().join('');
    }
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Error');
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arr = [];
    let keyStep = -1;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i].toUpperCase()) > -1) {
        keyStep++;
        let number = (alphabet.indexOf(message[i].toUpperCase()) + alphabet.length - alphabet.indexOf(key[keyStep % key.length].toUpperCase())) % alphabet.length;
        arr.push(alphabet[number]);
      } else {
        arr.push(message[i]);
      }
    }
    if (this.direct) {
      return arr.join('');
    } else {
      return arr.reverse().join('');
    }
  }




}

module.exports = VigenereCipheringMachine;