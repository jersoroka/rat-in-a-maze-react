import React, { useState } from 'react';
import './Grid.css';
import Square from './Square.js';

export default function Grid() {
    const [cellsPerRow, setCellsPerRow] = useState(5);
    const [squares, setSquares] = useState(generateSquares());

    function generateSquares() {
        let gridSquares = [];

        for (let index = 1; index <= cellsPerRow * cellsPerRow; index++) { 
            if (index === 7 || index === 9) {
                gridSquares.push(<Square colour="crimson" index={index} />)
            } else {
                gridSquares.push(<Square colour="orange" index={index}/>);
            }
        }
        return gridSquares;
    }

    return (
        <div className="grid">
            {squares}
        </div>
    )
}
