import { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';
import { generateGrid, timer } from './Helpers';

// Initial state
const initialState = {
    grid: generateGrid(20)
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [isDragMode, setIsDragMode] = useState(false);

    // Actions
    function restartMaze() {
        dispatch({
            type: 'RESTART_MAZE'
        })
    }

    function setIsMazeWall(pos) {
        const {row, column} = pos;
        dispatch({
            type: 'SET_SQUARE_TYPE',
            payload: {
                row: row,
                column: column
            }
        });
    };

    async function setIsRoute(pos, isRoute) {
        const {row, column} = pos;
        dispatch({
            type: 'SET_IS_ROUTE',
            payload: {
                row: row,
                column: column,
                isRoute: isRoute
            }
        })
        await timer();
    }

    function solveMaze() {
        dispatch({
            type: 'SOLVE_MAZE',
            payload: {
                setIsRoute: setIsRoute
            }
        })
    };

    return (
        <GlobalContext.Provider value={{
        grid: state.grid,
        setIsMazeWall,
        setIsRoute,
        restartMaze,
        solveMaze,
        setIsDragMode,
        isDragMode
    }}>
        {children}
    </GlobalContext.Provider>)
}