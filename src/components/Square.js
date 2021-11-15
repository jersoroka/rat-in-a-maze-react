import React from 'react';
import './Square.css';

export default function Square({ colour, index }) {

    return (
        <div className="square" style={{ background: colour }}>
            {index}
            {index === 1 && <div>rat</div>}
            {index === 25 && <div>cheese</div>}
        </div>
    )
}
