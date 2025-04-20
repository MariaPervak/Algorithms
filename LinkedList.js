// Связные списки
// https://www.codewars.com/kata/linked-lists-insert-nth-node

function Node(data) {
    this.data = data;
    this.next = null;
}

function insertNth(head, index, data) {
    if (index < 0) {
        throw new Error("Invalid index");
    }

    const newNode = new Node(data);

    if (index === 0) {
        newNode.next = head;
        return newNode;
    }

    let current = head;
    let prev = null;
    let currentIndex = 0;

    while (current !== null && currentIndex < index) {
        prev = current;
        current = current.next;
        currentIndex++;
    }

    if (currentIndex < index) {
        throw new Error("Invalid index");
    }

    prev.next = newNode;
    newNode.next = current;

    return head;
}

// https://www.codewars.com/kata/55cc33e97259667a08000044/train/javascript
function Node(data) {
    this.data = data;
    this.next = null;
}

function sortedInsert(head, data) {
    const newNode = new Node(data);

    if (head === null || data < head.data) {
        newNode.next = head;
        return newNode;
    }

    let current = head;

    while (current.next !== null && current.next.data < data) {
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;

    return head;
}

// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let count = 0;
    let current = head;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}

function count(head, data) {
    let occurrences = 0;
    let current = head;

    while (current !== null) {
        if (current.data === data) {
            occurrences++;
        }
        current = current.next;
    }

    return occurrences;
}