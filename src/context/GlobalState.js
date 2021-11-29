import { createContext, useReducer } from 'react';
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

    // Actions
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

            }
        })
    };

    function solveMaze() {
        dispatch({
            type: 'SOLVE_MAZE',
            payload: {
                grid: state.grid
            }
        })
    };
    console.log(state.grid)
    return (
        <GlobalContext.Provider value={{
        grid: state.grid,
        setIsMazeWall,
        // setMazeLength,
        solveMaze
    }}>
        {children}
    </GlobalContext.Provider>)
}