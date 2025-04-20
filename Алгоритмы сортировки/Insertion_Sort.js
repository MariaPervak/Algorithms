// Сортировка вставками
// https://www.codewars.com/kata/58ab002d68ee07c57b000118/train/javascript

function toRange(arr) {
    if (arr.length === 0) return '';

    const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);

    const result = [];
    let start = uniqueSorted[0];
    let prev = start;

    for (let i = 1; i < uniqueSorted.length; i++) {
        if (uniqueSorted[i] === prev + 1) {
            prev = uniqueSorted[i];
        } else {
            result.push(start === prev ? `${start}` : `${start}_${prev}`);
            start = uniqueSorted[i];
            prev = start;
        }
    }

    result.push(start === prev ? `${start}` : `${start}_${prev}`);

    return result.join(',');
}

function toArray(str) {
    if (str === '') return [];

    const result = [];
    const ranges = str.split(',');

    for (const range of ranges) {
        if (range.includes('_')) {
            const [start, end] = range.split('_').map(Number);
            for (let i = start; i <= end; i++) {
                result.push(i);
            }
        } else {
            result.push(Number(range));
        }
    }

    return result;
}
