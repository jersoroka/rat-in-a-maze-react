import { solveMaze } from './MazeSolver';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from './Button';
import { BUTTON_TEXT } from '../constants/enums';
import './Header.css';
import InfoPanel from './InfoPanel';

function Header() {
    const { grid, restartMaze, setIsRoute, clearMazeSolution, setShowNoSolutionPopup } = useContext(GlobalContext);

    const [isInfoPanelShown, setIsInfoPanelShown] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    async function completeMaze() {
        if (isSolved) {
            clearMazeSolution();
            setIsSolved(false);
        } else {
            const solution = await solveMaze(grid, setIsRoute);
            if (solution) {
                setIsSolved(true);
            } else {
                clearMazeSolution();
                setIsSolved(false);
                setShowNoSolutionPopup(true);
            }
        }
    }

    function resetMaze() {
        setIsSolved(false);
        restartMaze();
    }

    return (
        <div className="header">
            {isInfoPanelShown && <InfoPanel setIsInfoPanelShown={setIsInfoPanelShown}/>}
            <Button text={isSolved ? BUTTON_TEXT.CLEAR : BUTTON_TEXT.SOLVE} handleClick={() => completeMaze()}/>
            <Button text={BUTTON_TEXT.RESET} handleClick={() => resetMaze()}/>
            <Button text={BUTTON_TEXT.INFO_PANEL} handleClick={() => setIsInfoPanelShown(!isInfoPanelShown)}/>
            <Button text={BUTTON_TEXT.GET_MAZE}/>
        </div>
    )
}

export default Header;
