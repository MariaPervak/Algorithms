// Хэш таблицы
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    const freq = {};

    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (const num in freq) {
        if (freq[num] === 1) {
            return parseFloat(num);
        }
    }
}