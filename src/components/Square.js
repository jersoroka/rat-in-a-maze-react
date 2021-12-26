import { useContext } from 'react';
import './Square.css';
import { GlobalContext } from '../context/GlobalState';
import rat from '../images/rat.png';
import cheese from '../images/cheese.png';
import { findAdjacentRoutes } from './RouteHelpers';

export default function Square({square}) {
    const { isMazeWall, isRoute, id, pos} = square;
    const { grid, setIsMazeWall, isDragMode, setIsDragMode } = useContext(GlobalContext);

    function handleEvent(e) {
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();
                if (id !== 1 && id !== (grid.length - 1)^2) {
                    setIsMazeWall(pos);
                }
                setIsDragMode(true);
                break;
            case 'mouseup':
                e.preventDefault();
                setIsDragMode(false);
                break;
            case 'mouseover':
                if (id !== 1 && id !== (grid.length - 1)^2 && isDragMode) {
                    setIsMazeWall(pos);
                }
                break;
            default:
                break;
        }
    };

    let squarePathStyling = isMazeWall ? 'square-wall' : 'square-path';
    const stylingForSquareWithTopAndRightNeighbours = 
        <div className='square-grid'>
            <div className='square-grid-top'/>
            <div className='square-grid-center'
                style={{'borderBottomLeftRadius': '10px'}}/>
            <div className='square-grid-right'/>
        </div>
    const stylingForSquareWithLeftAndBottomNeighbours = 
        <div className='square-grid'>
            <div className='square-grid-left'/>
            <div className='square-grid-center'
                style={{'borderTopRightRadius': '10px'}}/>
            <div className='square-grid-bottom'/>
        </div>
    const ratStyling = <img src={rat} className='square-image' alt="Rat"/>;
    const cheeseStyling = <img src={cheese} className='square-image' alt='Cheese'/>;

    function setSquareRouteStyling(styling) {
        if (styling === 'square-left-bottom') return stylingForSquareWithLeftAndBottomNeighbours;
        if (styling === 'square-top-right') return stylingForSquareWithTopAndRightNeighbours;
        if (pos.row === 0 && pos.column === 0) return ratStyling;
        if (pos.row === grid.length - 1 && pos.column === grid.length - 1) return cheeseStyling;
        return <div className={`${styling}`}/>;
    }

    const squareWithRouteStyling = setSquareRouteStyling(findAdjacentRoutes(pos, isRoute, grid));

    return (
        <div 
            className={`square ${squarePathStyling}`}
            onMouseDown={(e) => handleEvent(e)}
            onMouseUp={(e) => handleEvent(e)}
            onMouseOver={(e) => handleEvent(e)}
            >
                {squareWithRouteStyling}
        </div>
    )
}
