// Сортировка выбором

// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

function mazeRunner(maze, directions) {
    let startX, startY;
    const size = maze.length;

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (maze[y][x] === 2) {
                startX = x;
                startY = y;
                break;
            }
        }
        if (startX !== undefined) break;
    }

    let currentX = startX;
    let currentY = startY;

    for (const dir of directions) {
        switch (dir) {
            case 'N': currentY--; break;
            case 'S': currentY++; break;
            case 'E': currentX++; break;
            case 'W': currentX--; break;
        }

        if (currentX < 0 || currentY < 0 || currentX >= size || currentY >= size) {
            return 'Dead';
        }

        const cell = maze[currentY][currentX];
        if (cell === 1) return 'Dead';  // Hit a wall
        if (cell === 3) return 'Finish'; // Reached the end
    }

    return 'Lost';
}