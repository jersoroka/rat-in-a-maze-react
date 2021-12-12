import { useContext } from 'react';
import './Square.css';
import { GlobalContext } from '../context/GlobalState';

export default function Square({square}) {
    const { isMazeWall, isRoute, id, pos} = square;
    const { grid, setIsMazeWall } = useContext(GlobalContext);
    let mazeLength = ((1 / (grid.length)) * 100).toFixed(2) + '%';

    function handleClick() {
        if (id !== 1) {
            setIsMazeWall(pos)
        }
    }

    let squareColour = isMazeWall ? 'wall' : (isRoute ? 'solpath' : 'path');

    return (
        <div 
            className={`square ${squareColour}`}
            style={{width: mazeLength, 
                    height: mazeLength}}
            onDragEnter={() => handleClick()}
            onClick={() => handleClick()}
            >
        </div>
    )
}
