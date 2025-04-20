// Сортировка слиянием
// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
    const isArr1Ascending = arr1.length <= 1 || arr1[0] <= arr1[1];

    const isArr2Ascending = arr2.length <= 1 || arr2[0] <= arr2[1];

    const sortedArr1 = isArr1Ascending ? arr1 : [...arr1].reverse();
    const sortedArr2 = isArr2Ascending ? arr2 : [...arr2].reverse();

    const merged = [];
    let i = 0, j = 0;

    while (i < sortedArr1.length && j < sortedArr2.length) {
        if (sortedArr1[i] < sortedArr2[j]) {
            addUnique(merged, sortedArr1[i]);
            i++;
        } else if (sortedArr1[i] > sortedArr2[j]) {
            addUnique(merged, sortedArr2[j]);
            j++;
        } else {
            // Если элементы равны, добавляем один и двигаем оба указателя
            addUnique(merged, sortedArr1[i]);
            i++;
            j++;
        }
    }

    while (i < sortedArr1.length) {
        addUnique(merged, sortedArr1[i]);
        i++;
    }

    while (j < sortedArr2.length) {
        addUnique(merged, sortedArr2[j]);
        j++;
    }

    return merged;
}

function addUnique(arr, value) {
    if (arr.length === 0 || arr[arr.length - 1] !== value) {
        arr.push(value);
    }
}

// https://www.codewars.com/kata/537529f42993de0e0b00181f/train/javascript

function countInversions(arr) {
    return mergeSortWithCount(arr)[1];
}

function mergeSortWithCount(arr) {
    if (arr.length <= 1) return [arr, 0];

    const mid = Math.floor(arr.length / 2);
    const [left, leftCount] = mergeSortWithCount(arr.slice(0, mid));
    const [right, rightCount] = mergeSortWithCount(arr.slice(mid));
    const [merged, splitCount] = mergeWithCount(left, right);

    return [merged, leftCount + rightCount + splitCount];
}

function mergeWithCount(left, right) {
    const merged = [];
    let i = 0, j = 0, inversions = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i++]);
        } else {
            merged.push(right[j++]);
            inversions += left.length - i;
        }
    }

    return [
        [...merged, ...left.slice(i), ...right.slice(j)],
        inversions
    ];
}