import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { generateInitialGrid } from './Helpers';

// Initial state
const initialState = {
    grid: generateInitialGrid()
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function setSquareType(pos) {
        const {row, column} = pos;
        dispatch({
            type: 'SET_SQUARE_TYPE',
            payload: {
                row: row,
                column: column
            }
        });
    }
    return (
        <GlobalContext.Provider value={{
        grid: state.grid,
        setSquareType
    }}>
        {children}
    </GlobalContext.Provider>)
}