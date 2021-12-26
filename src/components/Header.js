import { solveMaze } from './MazeSolver';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from './Button';
import './Header.css';

function Header() {
    const { grid, restartMaze, setIsRoute } = useContext(GlobalContext);

    const [isInfoPanelShown, setIsInfoPanelShown] = useState(false);

    return (
        <div className="header">
            <Button text="SOLVE" handleClick={() => solveMaze(grid, setIsRoute)}/>
            <Button text="RESET" handleClick={() => restartMaze()}/>
            <Button text="THE RAT IN A MAZE PROBLEM"/>
            <Button text="USE PRE-GENERATED MAZE"/>
        </div>
    )
}

export default Header;
