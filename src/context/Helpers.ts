import { Square } from '../types';

export function generateInitialGrid(): Square[][] {
    let gridRows = [];
    for (let row = 0; row < 5; row++) { 
        let rowArray = [];
        for (let column = 0; column < 5; column++) {
            const index = (5 * row) + column + 1;
            rowArray.push({
                id: index,
                pos: {
                    row: row,
                    column: column
                },
                isMazeWall: false,
            });
        }
        gridRows.push(rowArray);
    }
    return gridRows;
}