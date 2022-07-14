const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let tempResult = '';
    let decodeArr =  expr.match(/.{1,10}/g);
    decodeArr.forEach((arr) => {
      const decodeSubArr =  arr.match(/.{1,2}/g);
      tempResult = '';
      for(let chunk of decodeSubArr) {
        if (chunk === '10') {
          tempResult += '.'
        }else if (chunk === '11') {
          tempResult += '-';
        }else if (chunk === '**') {
          if (result.slice(-1) !== ' ') result += ' ';
        }
      }
      tempResult.length > 0 ? result += MORSE_TABLE[tempResult] : result;
    })
    return result;
}

module.exports = {
    decode
}