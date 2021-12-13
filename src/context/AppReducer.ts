import {cloneDeep} from 'lodash';
import { generateGrid } from './Helpers';
import { solveMaze } from '../components/MazeSolver';

export default (state: any, action: any) => {
    let deepCopyState = cloneDeep(state);
    switch (action.type) {
        case 'ANIMATE_MAZE_SOLUTION':
            deepCopyState.grid = action.payload.solMaze;
            return deepCopyState;
        case 'RESTART_MAZE':
            deepCopyState.grid = generateGrid(state.grid.length);
            return deepCopyState;
        case 'SET_SQUARE_TYPE':
            let square = deepCopyState.grid[action.payload.row][action.payload.column];
            square.isMazeWall = !square.isMazeWall
            return deepCopyState;
        case 'SOLVE_MAZE':
            deepCopyState.grid = solveMaze(deepCopyState.grid);
            return deepCopyState;
        default:
            return state;
    }
}