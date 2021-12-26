import { Square } from '../types';
import {cloneDeep, unset} from 'lodash';
import { timer } from '../context/Helpers';

export function isValidPos(maze: Square[][], x: number, y: number): boolean {
    return (x >= 0 && x < maze.length && y >= 0 && y < maze.length && !maze[x][y].isMazeWall)
};

export async function solveMazeHelper(maze: Square[][], x: number, y: number, solMaze: Square[][], setIsRoute: (pos: {row: number, column: number}, isRoute: boolean) => void): Promise<boolean> {

    if (!isValidPos(maze, x, y) || solMaze[x][y].isRoute === false) return false;

    if (x === maze.length - 1 && y === maze.length - 1) {
        solMaze[x][y].isRoute = true;
        await timer();
        setIsRoute({row: x, column: y}, true);
        return true;
    }

    if (solMaze[x][y].isRoute !== true) {
        solMaze[x][y].isRoute = true;
        await timer();
        setIsRoute({row: x, column: y}, true);

        if (await solveMazeHelper(maze, x + 1, y, solMaze, setIsRoute) || await solveMazeHelper(maze, x, y + 1, solMaze, setIsRoute) 
        ) {
            return true;
        }

        solMaze[x][y].isRoute = false;
        await timer();
        setIsRoute({row: x, column: y}, false);
    }
    return false;
};

export async function solveMaze(maze: Square[][], setIsRoute: (pos: {row: number, column: number}, isRoute: boolean) => void): Promise<Square[][] | false> {
    let solMaze = cloneDeep(maze);
    if (!(await solveMazeHelper(maze, 0, 0, solMaze, setIsRoute))) {
        return false;
    };
    return solMaze;
};