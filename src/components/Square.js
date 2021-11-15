import React from 'react';
import './Square.css';

export default function Square({ colour }) {
    return (
        <div className="square" style={{ background: colour }}>
            Hello, world!
        </div>
    )
}
