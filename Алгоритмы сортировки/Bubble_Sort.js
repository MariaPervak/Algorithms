// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript

function sortGiftCode(code){
    const arr = code.split('');
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr.join('');
}

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
    const oddNumbers = array.filter(num => num % 2 !== 0);

    oddNumbers.sort((a, b) => a - b);

    let oddIndex = 0;
    return array.map(num => {
        if (num % 2 !== 0) {
            return oddNumbers[oddIndex++];
        }
        return num;
    });
}