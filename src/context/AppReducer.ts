import {cloneDeep} from 'lodash';
import { generateGrid } from './Helpers';
import { solveMaze } from '../components/MazeSolver';

export default (state: any, action: any) => {
    let deepCopyState = cloneDeep(state);
    let square;
    switch (action.type) {
        case 'RESTART_MAZE':
            deepCopyState.grid = generateGrid(state.grid.length);
            return deepCopyState;
        case 'SET_IS_ROUTE':
            square = deepCopyState.grid[action.payload.row][action.payload.column];
            square.isRoute = action.payload.isRoute;
            return deepCopyState;
        case 'SET_SQUARE_TYPE':
            square = deepCopyState.grid[action.payload.row][action.payload.column];
            square.isMazeWall = !square.isMazeWall
            return deepCopyState;
        case 'SOLVE_MAZE':
            deepCopyState.grid = solveMaze(deepCopyState.grid);
            return deepCopyState;
        default:
            return state;
    }
}