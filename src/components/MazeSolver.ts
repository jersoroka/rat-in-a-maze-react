export function isValidPos(maze: number[][], x: number, y: number): boolean {
    return (x >= 0 && x < maze.length && y >= 0 && y < maze.length && maze[x][y] === 1)
};

export function solveMazeHelper(maze: number[][], x: number, y: number, solMaze: number[][]): boolean {
    if (x == maze.length - 1 && y == maze.length - 1) {
        solMaze[x][y] = 1;
        return true;
    }

    if (isValidPos(maze, x, y) && solMaze[x][y] != 1) {
        solMaze[x][y] = 1;

        if ( solveMazeHelper(maze, x + 1, y, solMaze) || solveMazeHelper(maze, x, y + 1, solMaze) 
        ) {
            return true;
        }

        solMaze[x][y] = 0;
    }

    return false;
}