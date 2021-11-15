import React from 'react';
import './Grid.css';
import Square from './Square.js';

export default function Grid() {
    let squares = [];

    for (let i = 1; i <= 25; i++) {
        if (i === 7 || i === 9) {
            squares.push(<Square colour="crimson"/>)
        } else {
            squares.push(<Square colour="orange"/>);
        }
        
    }

    return (
        <div className="grid">
            {squares}
        </div>
    )
}
