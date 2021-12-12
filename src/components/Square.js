import { useContext, useState } from 'react';
import './Square.css';
import { GlobalContext } from '../context/GlobalState';

export default function Square({square}) {
    const { isMazeWall, isRoute, id, pos} = square;
    const { grid, setIsMazeWall, isDragMode, setIsDragMode } = useContext(GlobalContext);
    const [isColourChange, setIsColourChange] = useState(false);
    let mazeLength = ((1 / (grid.length)) * 100).toFixed(2) + '%';

    function handleClick() {
        if (id !== 1 && isDragMode) {
            setIsMazeWall(pos)
        }
    }

    let squareColour = isMazeWall ? 'wall' : (isRoute ? 'solpath' : 'path');

    return (
        <div 
            className={`square ${squareColour}`}
            style={{width: mazeLength, 
                    height: mazeLength}}
            // onDragEnter={() => handleClick()}
            onMouseDown={(e) => {
                e.preventDefault();
                setIsDragMode(true);
                console.log("mouse down")
            }}
            onMouseUp={(e) => {
                e.preventDefault()
                setIsDragMode(false)
                console.log("mouse up")}}
            onMouseOver={() => handleClick()}
            >
        </div>
    )
}
