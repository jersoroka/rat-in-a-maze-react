import { solveMaze } from './MazeSolver';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from './Button';
import './Header.css';

function Header() {
    const { grid, restartMaze, setIsRoute } = useContext(GlobalContext);

    return (
        <div className="header">
            <Button text="Solve" handleClick={() => solveMaze(grid, setIsRoute)}></Button>
            <Button text="Reset" handleClick={() => restartMaze()}></Button>
        </div>
    )
}

export default Header;
