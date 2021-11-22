export function isValidPos(maze: number[][], x: number, y: number): boolean {
    return (x >= 0 && x < maze.length && y >= 0 && y < maze.length && maze[x][y] === 1)
};