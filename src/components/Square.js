import { useContext } from 'react';
import './Square.css';
import { GlobalContext } from '../context/GlobalState';

export default function Square({square}) {
    const { isMazeWall, isRoute, id, pos} = square;
    const { grid, setIsMazeWall, isDragMode, setIsDragMode } = useContext(GlobalContext);
    let mazeLength = ((1 / (grid.length)) * 100).toFixed(2) + '%';

    function handleEvent(e) {
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();
                setIsMazeWall(pos);
                setIsDragMode(true);
                break;
            case 'mouseup':
                e.preventDefault();
                setIsDragMode(false);
                break;
            case 'mouseover':
                if (id !== 1 && isDragMode) {
                    setIsMazeWall(pos);
                }
                break;
        }
    };

    let squareColour = isMazeWall ? 'wall' : (isRoute ? 'solpath' : 'path');

    return (
        <div 
            className={`square ${squareColour}`}
            style={{width: mazeLength, 
                    height: mazeLength}}
            onMouseDown={(e) => handleEvent(e)}
            onMouseUp={(e) => handleEvent(e)}
            onMouseOver={(e) => handleEvent(e)}
            />
    )
}
