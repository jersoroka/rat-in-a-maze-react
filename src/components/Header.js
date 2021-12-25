import { solveMaze } from './MazeSolver';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from './Button';
import './Header.css';

function Header() {
    const { grid, restartMaze, setIsRoute } = useContext(GlobalContext);

    return (
        <div className="header">
            <Button text="SOLVE" handleClick={() => solveMaze(grid, setIsRoute)}></Button>
            <Button text="RESET" handleClick={() => restartMaze()}></Button>
        </div>
    )
}

export default Header;
