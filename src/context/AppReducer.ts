import {cloneDeep} from 'lodash';
import { generateGrid } from './Helpers';

export default (state: any, action: any) => {
    let deepCopyState = cloneDeep(state);
    let square;
    switch (action.type) {
        case 'CLEAR_MAZE_SOLUTION':
            deepCopyState.grid.forEach((row: { isRoute: boolean | undefined; }[]) => {
                row.forEach((square: { isRoute: undefined | boolean; }) => {
                    square.isRoute = undefined;
                })
            })
            return deepCopyState;
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
        default:
            return state;
    }
}