import React, { useState } from 'react';
import './Grid.css';
import Square from './Square.js';

export default function Grid() {
    const [cellsPerRow, setCellsPerRow] = useState(5);
    // change to set grid probably
    const [grid, setGrid] = useState(generateGrid());

    function generateGrid() {
        let gridRows = [];
        for (let row = 0; row < cellsPerRow; row++) { 
            let rowArray = [];
            for (let column = 1; column <= cellsPerRow; column++) {
                const index = (cellsPerRow * row) + column;
                // TODO: this isWall is temporary - will be changed to something user-defined later
                const isWall = ((index >= 6 && index <= 9) || (index === 14) || (index === 19) || (index === 24))
                rowArray.push({
                    key: index,
                    isMazeWall: isWall,
                    index: index
                })
            }
            gridRows.push(rowArray);
        }
        return gridRows;
    }
    
    const renderedSquares = grid.map(row => {
        return row.map(square => {
            return <Square key={square.index} isMazeWall={square.isMazeWall} index={square.index}/>;
        })
    });

    return (
        <div className="grid">
            {renderedSquares}
        </div>
    )
}
