import {cloneDeep} from 'lodash';

export default (state: any, action: any) => {
    switch (action.type) {
        case 'SET_SQUARE_TYPE':
            let deepCopyState = cloneDeep(state);
            let square = deepCopyState.grid[action.payload.row][action.payload.column];
            square.isMazeWall = !square.isMazeWall
            return deepCopyState;
        default:
            return state;
    }
}