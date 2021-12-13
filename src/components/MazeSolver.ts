import { Square } from '../types';
import {cloneDeep} from 'lodash';
// import {animateMazeSolution} from '../context/GlobalState'

export function isValidPos(maze: Square[][], x: number, y: number): boolean {
    return (x >= 0 && x < maze.length && y >= 0 && y < maze.length && !maze[x][y].isMazeWall)
};

export function solveMazeHelper(maze: Square[][], x: number, y: number, solMaze: Square[][]): boolean {

    if (x == maze.length - 1 && y == maze.length - 1) {
        solMaze[x][y].isRoute = true;
        // animateMazeSolution(solMaze);
        return true;
    }

    if (isValidPos(maze, x, y) && solMaze[x][y].isRoute != true) {
        solMaze[x][y].isRoute = true;

        if (solveMazeHelper(maze, x + 1, y, solMaze) || solveMazeHelper(maze, x, y + 1, solMaze) 
        ) {
            return true;
        }

        solMaze[x][y].isRoute = false;
    }
    // TODO: add custom hook for updating maze before each return statement
    return false;
};

export function solveMaze(maze: Square[][]): (Square[][] | false) {
    let solMaze = cloneDeep(maze);
    solMaze.forEach(row => {
        row.forEach(square => {
            square.isRoute = false;
        });
    })

    if (!solveMazeHelper(maze, 0, 0, solMaze)) {
        return false;
    };
    return solMaze;
};