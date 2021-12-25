import { useContext } from 'react';
import Grid from './components/Grid';
import './App.css';
import { GlobalContext } from './context/GlobalState';
import { solveMaze } from './components/MazeSolver';

function App() {
  const { grid, restartMaze, setIsRoute } = useContext(GlobalContext);

  return (
      <main>
        <section className="container">
          <Grid/>
          <button onClick={() => solveMaze(grid, setIsRoute)}>Solve</button>
          <button onClick={() => restartMaze()}>Restart</button>
        </section>
      </main>
  );
}

export default App;
