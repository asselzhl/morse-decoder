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
    let splittedArray = [];

    for (let i = 0; i < expr.length; i = i + 10) {
        splittedArray.push(expr.slice(i, i + 10));
    }

    for (let i = 0; i < splittedArray.length; i++) {
        if (splittedArray[i] === '**********') {
            splittedArray[i] = ' ';
        } else {
            splittedArray[i] = splittedArray[i].replaceAll('10', '.');
            splittedArray[i] = splittedArray[i].replaceAll('11', '-');
            splittedArray[i] = splittedArray[i].replaceAll('0', '');

            splittedArray[i] = MORSE_TABLE[splittedArray[i]];
        }
    }
    return splittedArray.join('');
}

module.exports = {
    decode
}