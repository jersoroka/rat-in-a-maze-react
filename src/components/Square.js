import React, { useState } from 'react';
import './Square.css';

export default function Square({ index, isMazeWall }) {
    const [isWall, setIsWall] = useState(isMazeWall);

    return (
        <div className={`square ${isWall ? 'wall' : 'path'}`}>
            {index}
            {index === 1 && <div>rat</div>}
            {index === 25 && <div>cheese</div>}
        </div>
    )
}
