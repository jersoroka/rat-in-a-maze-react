import React, { useState } from 'react';
import './Square.css';

export default function Square({ index, isMazeWall }) {
    const [isWall, setIsWall] = useState(isMazeWall);

    function handleClick() {
        if (index !== 1) {
            setIsWall(!isWall);
            // some function that changes the square object itself
        }
    }

    return (
        <div 
            className={`square ${isWall ? 'wall' : 'path'}`}
            onClick={() => handleClick()}>
            {index}
            {index === 1 && <div>rat</div>}
            {index === 25 && <div>cheese</div>}
        </div>
    )
}
