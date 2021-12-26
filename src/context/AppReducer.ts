import {cloneDeep} from 'lodash';
import { generateGrid } from './Helpers';
import { DISPATCH } from '../constants/enums';

export default (state: any, action: any) => {
    let deepCopyState = cloneDeep(state);
    let square;
    switch (action.type) {
        case DISPATCH.CLEAR_MAZE_SOLUTION:
            deepCopyState.grid.forEach((row: { isRoute: boolean | undefined; }[]) => {
                row.forEach((square: { isRoute: undefined | boolean; }) => {
                    square.isRoute = undefined;
                })
            })
            return deepCopyState;
        case DISPATCH.RESTART_MAZE:
            deepCopyState.grid = generateGrid(state.grid.length);
            return deepCopyState;
        case DISPATCH.SET_IS_ROUTE:
            square = deepCopyState.grid[action.payload.row][action.payload.column];
            square.isRoute = action.payload.isRoute;
            return deepCopyState;
        case DISPATCH.SET_SQUARE_TYPE:
            square = deepCopyState.grid[action.payload.row][action.payload.column];
            square.isMazeWall = !square.isMazeWall
            return deepCopyState;
        default:
            return state;
    }
}