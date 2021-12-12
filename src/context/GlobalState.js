import { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';
import { generateGrid } from './Helpers';

// Initial state
const initialState = {
    grid: generateGrid(10)
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

    function setMazeLength(length) {
        dispatch({
            type: 'SET_MAZE_LENGTH',
            payload: {
                length: length
            }
        })
    };

    function solveMaze() {
        dispatch({
            type: 'SOLVE_MAZE'
        })
    };
    return (
        <GlobalContext.Provider value={{
        grid: state.grid,
        setIsMazeWall,
        setMazeLength,
        restartMaze,
        solveMaze,
        setIsDragMode,
        isDragMode
    }}>
        {children}
    </GlobalContext.Provider>)
}