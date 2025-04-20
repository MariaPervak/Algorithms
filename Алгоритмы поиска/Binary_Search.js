// Бинарный поиск
// https://www.codewars.com/kata/5a6b24d4e626c59d5b000066/train/javascript

function square_sums_row(N) {
    const maxSum = N + (N - 1);
    const squares = new Set();
    for (let i = 2; i * i <= maxSum; i++) {
        squares.add(i * i);
    }

    const adj = {};
    for (let i = 1; i <= N; i++) {
        adj[i] = [];
        for (const s of squares) {
            const j = s - i;
            if (j >= 1 && j <= N && j !== i) {
                adj[i].push(j);
            }
        }
    }


    function backtrack(path) {
        if (path.length === N) {
            return path.slice();
        }
        const last = path[path.length - 1];
        for (const neighbor of adj[last]) {
            if (!path.includes(neighbor)) {
                path.push(neighbor);
                const result = backtrack(path);
                if (result) {
                    return result;
                }
                path.pop();
            }
        }
        return null;
    }

    for (let start = 1; start <= N; start++) {
        const path = [start];
        const result = backtrack(path);
        if (result) {
            return result;
        }
    }

    return false;
}

// https://www.codewars.com/kata/5a3af5b1ee1aaeabfe000084/train/javascript
function sumOfSquares(n) {
    const isSquare = (x) => {
        const s = Math.floor(Math.sqrt(x));
        return s * s === x;
    };

    if (isSquare(n)) {
        return 1;
    }

    for (let i = 1; i * i <= n; i++) {
        if (isSquare(n - i * i)) {
            return 2;
        }
    }

    while (n % 4 === 0) {
        n /= 4;
    }
    if (n % 8 === 7) {
        return 4;
    }

    return 3;
}