import { Square } from '../types';

export function generateGrid(length: number): Square[][] {
    let gridRows = [];
    for (let row = 0; row < length; row++) { 
        let rowArray = [];
        for (let column = 0; column < length; column++) {
            const index = (length * row) + column + 1;
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

export async function timer() {
    return await new Promise(res => setTimeout(res, 1000));
  }