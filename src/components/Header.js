import { solveMaze } from './MazeSolver';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from './Button';
import './Header.css';

function Header() {
    const { grid, restartMaze, setIsRoute, clearMazeSolution } = useContext(GlobalContext);

    const [isInfoPanelShown, setIsInfoPanelShown] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    function completeMaze() {
        if (isSolved) {
            clearMazeSolution();
            setIsSolved(false);
        } else {
            solveMaze(grid, setIsRoute);
            setIsSolved(true);
        }
    }

    return (
        <div className="header">
            <Button text={isSolved ? 'CLEAR MAZE SOLUTION' : 'SOLVE'} handleClick={() => completeMaze()}/>
            <Button text="RESET" handleClick={() => restartMaze()}/>
            <Button text="THE RAT IN A MAZE PROBLEM"/>
            <Button text="USE PRE-GENERATED MAZE"/>
        </div>
    )
}

export default Header;
