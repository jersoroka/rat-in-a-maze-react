import { useContext } from 'react';
import './Square.css';
import { GlobalContext } from '../context/GlobalState';

export default function Square({square}) {
    const { isMazeWall, id, pos} = square;
    const { grid, setIsMazeWall } = useContext(GlobalContext);
    let mazeLength = ((1 / (grid.length)) * 100).toFixed(2) + '%';

    function handleClick() {
        if (id !== 1) {
            setIsMazeWall(pos)
        }
    }

    return (
        <div 
            className={`square ${isMazeWall ? 'wall' : 'path'}`}
            style={{width: mazeLength, 
                    height: mazeLength}}
            onClick={() => handleClick()}>
            {id}
        </div>
    )
}
