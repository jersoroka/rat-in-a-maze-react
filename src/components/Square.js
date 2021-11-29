import { useContext } from 'react';
import './Square.css';
import { GlobalContext } from '../context/GlobalState';

export default function Square({square}) {
    const { isMazeWall, id, pos} = square;
    const { setSquareType } = useContext(GlobalContext);

    function handleClick() {
        if (id !== 1) {
            setSquareType(pos)
        }
    }

    return (
        <div 
            className={`square ${isMazeWall ? 'wall' : 'path'}`}
            onClick={() => handleClick()}>
            {id}
            {id === 1 && <div>rat</div>}
            {id === 25 && <div>cheese</div>}
        </div>
    )
}
