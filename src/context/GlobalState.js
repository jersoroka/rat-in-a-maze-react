import { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';
import { generateGrid } from './Helpers';
import { DISPATCH } from '../constants/enums';

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
    const [showNoSolutionPopup, setShowNoSolutionPopup] = useState(false);

    // Actions
    function clearMazeSolution() {
        dispatch({
            type: DISPATCH.CLEAR_MAZE_SOLUTION
        })
    }

    function restartMaze() {
        dispatch({
            type: DISPATCH.RESTART_MAZE
        })
    }

    function setIsMazeWall(pos) {
        const {row, column} = pos;
        dispatch({
            type: DISPATCH.SET_SQUARE_TYPE,
            payload: {
                row: row,
                column: column
            }
        });
    };

    function setIsRoute(pos, isRoute) {
        const {row, column} = pos;
        dispatch({
            type: DISPATCH.SET_IS_ROUTE,
            payload: {
                row: row,
                column: column,
                isRoute: isRoute
            }
        });
    }

    function getPregeneratedMaze() {
        dispatch({
            type: DISPATCH.GET_PREGENERATED_MAZE
        });
    }

    return (
        <GlobalContext.Provider value={{
        grid: state.grid,
        clearMazeSolution,
        getPregeneratedMaze,
        setIsMazeWall,
        setIsRoute,
        restartMaze,
        setIsDragMode,
        setShowNoSolutionPopup,
        showNoSolutionPopup,
        isDragMode
    }}>
        {children}
    </GlobalContext.Provider>)
}