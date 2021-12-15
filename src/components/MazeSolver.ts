import { Square } from '../types';
import {cloneDeep} from 'lodash';

export function isValidPos(maze: Square[][], x: number, y: number): boolean {
    return (x >= 0 && x < maze.length && y >= 0 && y < maze.length && !maze[x][y].isMazeWall)
};

export function solveMazeHelper(maze: Square[][], x: number, y: number, solMaze: Square[][], setIsRoute: ((pos: {column: number, row: number}, isRoute: boolean) => void)): boolean {

    if (x == maze.length - 1 && y == maze.length - 1) {
        solMaze[x][y].isRoute = true;
        return true;
    }

    if (isValidPos(maze, x, y) && solMaze[x][y].isRoute != true) {
        solMaze[x][y].isRoute = true;

        if (solveMazeHelper(maze, x + 1, y, solMaze, setIsRoute) || solveMazeHelper(maze, x, y + 1, solMaze, setIsRoute) 
        ) {
            return true;
        }

        solMaze[x][y].isRoute = false;
    }
    return false;
};

export function solveMaze(maze: Square[][], setIsRoute: ((pos: {column: number, row: number}, isRoute: boolean) => void)): (Square[][] | false) {
    let solMaze = cloneDeep(maze);
    solMaze.forEach(row => {
        row.forEach(square => {
            square.isRoute = false;
        });
    })

    // finish passing along setIsRoute
    // make a commit
    // add setIsRoute to a place or two to test
    // make a commit

    if (!solveMazeHelper(maze, 0, 0, solMaze, setIsRoute)) {
        return false;
    };
    return solMaze;
};