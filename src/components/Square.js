import { useContext } from 'react';
import './Square.css';
import { GlobalContext } from '../context/GlobalState';
import rat from '../images/rat.png';
import cheese from '../images/cheese.png';
import { findAdjacentRoutes } from './RouteHelpers';

export default function Square({square}) {
    const { isMazeWall, isRoute, id, pos} = square;
    const { grid, setIsMazeWall, isDragMode, setIsDragMode } = useContext(GlobalContext);
    let mazeLength = ((1 / (grid.length)) * 100).toFixed(2) + '%';

    function handleEvent(e) {
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();
                if (id !== 1 && id !== (grid.length - 1)^2 && isDragMode) {
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

    let squareColour = isMazeWall ? 'wall' : 'path';

    const topRight = 
        <div className='square-grid'>
            <div className='square-grid-top'/>
            <div className='square-grid-center square-grid-center-topRight-border'
                style={{'border-bottom-left-radius': '10px'}}/>
            <div className='square-grid-right'/>
        </div>
    const leftBottom = 
        <div className='square-grid'>
            <div className='square-grid-left'/>
            <div className='square-grid-center'
                style={{'border-top-right-radius': '10px'}}/>
            <div className='square-grid-bottom'/>
        </div>

    const adjacentRoute = findAdjacentRoutes(pos, isRoute, grid);
    const block = setBlock();

    function setBlock() {
        if (adjacentRoute === 'square-left-bottom') return leftBottom;
        if (adjacentRoute === 'square-top-right') return topRight;
        if (pos.row === 0 && pos.column === 0) {
            return <img src={rat} className='square-image' alt="Rat"/>;
        }
        if (pos.row === grid.length - 1 && pos.column === grid.length - 1) {
            return <img src={cheese} className='square-image' alt='Cheese'/>;
        }
        return <div className={`${adjacentRoute}`}/>;
    }

    return (
        <div 
            className={`square ${squareColour}`}
            style={{width: mazeLength, 
                    height: mazeLength}}
            onMouseDown={(e) => handleEvent(e)}
            onMouseUp={(e) => handleEvent(e)}
            onMouseOver={(e) => handleEvent(e)}
            >
                {block}
        </div>
    )
}
