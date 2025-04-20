// Деревья

// https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript
function sumTheTreeValues(root){
    if (root === null) {
        return 0;
    }
    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}

// https://www.codewars.com/kata/57e5279b7cf1aea5cf000359/train/javascript
function maxSum(root) {
    if (!root) return 0

    let {value, left, right} = root

    if (!right) {
        return value + maxSum(left)
    }

    if (!left) {
        return value + maxSum(right)
    }

    return value + Math.max(maxSum(left), maxSum(right))
}

// https://www.codewars.com/kata/581e476d5f59408553000a4b/train/javascript
function length(head) {
    let count = 0;
    let current = head;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}