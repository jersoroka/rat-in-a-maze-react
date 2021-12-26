import { useContext } from 'react';
import './Square.css';
import { GlobalContext } from '../context/GlobalState';

export default function Square({square}) {
    const { isMazeWall, isRoute, id, pos} = square;
    const { grid, setIsMazeWall, isDragMode, setIsDragMode } = useContext(GlobalContext);
    let mazeLength = ((1 / (grid.length)) * 100).toFixed(2) + '%';

    function handleEvent(e) {
        switch (e.type) {
            case 'mousedown':
                e.preventDefault();
                setIsMazeWall(pos);
                setIsDragMode(true);
                break;
            case 'mouseup':
                e.preventDefault();
                setIsDragMode(false);
                break;
            case 'mouseover':
                if (id !== 1 && isDragMode) {
                    setIsMazeWall(pos);
                }
                break;
            default:
                break;
        }
    };

    let squareColour = isMazeWall ? 'wall' : (isRoute ? 'solpath' : 'path');

    function findAdjacentRoutes() {
        let isLeft = findIsLeft();
        let isRight = findIsRight();
        let isTop = findIsTop();
        let isBottom = findIsBottom();

        if (isTop && isBottom) return 'square-top-bottom';
        if (isTop && isRight) return 'square-top-right';

        if (isLeft && isRight) return 'square-left-right';
        if (isLeft && isBottom) return 'square-left-bottom';

        if (isTop) return 'square-top';
        if (isBottom) return 'square-bottom';
        if (isLeft) return 'square-left';
        if (isRight) return 'square-right';
    }

    function findIsLeft() {
        if (pos.column === 0) return false;
        return isRoute && pos.column > 0 && pos.column < grid.length && grid[pos.row][pos.column - 1].isRoute;
    }

    function findIsRight() {
        if (pos.column === grid.length - 1) return false;
        return isRoute && pos.column >= 0 && pos.column < grid.length - 1 && grid[pos.row][pos.column + 1].isRoute;
    }

    function findIsTop() {
        if (pos.row === 0) return false;
        return isRoute && pos.row > 0 && pos.row <= grid.length - 1 && grid[pos.row - 1][pos.column].isRoute;
    }

    function findIsBottom() {
        if (pos.row === grid.length - 1) return false;
        return isRoute && pos.row >= 0 && pos.row < grid.length - 1 && grid[pos.row + 1][pos.column].isRoute;
    }

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

    const adjacentRoute = findAdjacentRoutes();
    const block = setBlock();

    function setBlock() {
        if (adjacentRoute === 'square-left-bottom') return leftBottom;
        if (adjacentRoute === 'square-top-right') return topRight;
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
