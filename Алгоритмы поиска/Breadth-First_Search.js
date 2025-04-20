// Поиск в ширину
// https://www.codewars.com/kata/5765870e190b1472ec0022a2

function pathFinder(maze) {
    const grid = maze.split('\n').map(row => row.split(''));
    const N = grid.length;
    if (N === 1) return true;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [[0, 0]];
    const visited = new Array(N).fill().map(() => new Array(N).fill(false));
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX < N && newY >= 0 && newY < N && grid[newX][newY] !== 'W' && !visited[newX][newY]) {
                if (newX === N - 1 && newY === N - 1) {
                    return true;
                }
                visited[newX][newY] = true;
                queue.push([newX, newY]);
            }
        }
    }

    return false;
}