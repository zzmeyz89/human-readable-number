module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    
    symbArr = number.toString().split('');
    while (symbArr.length < 3) {
        symbArr.unshift('0');
    }
    const digitsArr = symbArr.map((symb) => symb = +symb);

    let hundreds = '';
    let tens = '';
    let ones = '';
    let teens = '';
    
    if (digitsArr[0]) {
        hundreds = zeroNine(digitsArr[0]) + ' hundred';
    }

    if (digitsArr[1] === 1) {
        teens = tenNineteen (number % 100);
    } else if (digitsArr[1] > 1) {
        tens = twentyNinety (digitsArr[1]);
    }

    if (digitsArr[1] !== 1) {
        ones = zeroNine(digitsArr[2]);
    }

    let arr = [hundreds, tens, teens, ones];
    let result = arr.filter(i => i !== '');
    return result.join(' ');
}

function zeroNine (digit) {
    switch (digit) {
        case 0:
            return '';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}

function tenNineteen (digit) {
    switch (digit) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

function twentyNinety (digit) {
    switch (digit) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}