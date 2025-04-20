// Линейный поиск
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2
function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const currentCharCode = array[i].charCodeAt(0);
        const nextCharCode = array[i + 1].charCodeAt(0);
        if (nextCharCode - currentCharCode > 1) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }
    return '';
}

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(A) {
    const count = {};
    for (const num of A) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }
    for (const num in count) {
        if (count[num] % 2 !== 0) {
            return parseInt(num);
        }
    }
    return 0;
}

// https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(n) {
    let divisors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i !== n / i) {
                divisors.push(i);
                divisors.push(n / i);
            } else {
                divisors.push(i);
            }
        }
    }
    if (divisors.length === 0) {
        return `${n} is prime`;
    } else {
        return divisors.sort((a, b) => a - b);
    }
}

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

function maxSequence(arr) {
    if (arr.length === 0) return 0;

    let maxCurrent = arr[0];
    let maxGlobal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }

    return maxGlobal > 0 ? maxGlobal : 0;
}