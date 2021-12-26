import { useContext } from 'react';
import './Grid.css';
import Square from './Square.js';
import { GlobalContext } from '../context/GlobalState';
import NoSolutionPopUp from './NoSolutionPopup';

export default function Grid() {
    const { grid, setIsDragMode, showNoSolutionPopup } = useContext(GlobalContext);
    
    let renderedSquares = grid.map(row => {
        return row.map(square => {
            return <Square key={square.id} square={square}/>;
        })
    });

    return (
        <div className="grid"
        onMouseLeave={() => setIsDragMode(false)}>
            {renderedSquares}
            {showNoSolutionPopup && <NoSolutionPopUp/>}
        </div>
    )
}
