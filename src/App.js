import { useContext, useEffect } from 'react';
import Grid from './components/Grid';
import './App.css';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { restartMaze, solveMaze } = useContext(GlobalContext);

  useEffect(() => {
    setMazeLength(length);
  }, [length])

  return (
      <main>
        <section className="container">
          <Grid/>
          <button onClick={() => solveMaze()}>Solve</button>
          <button onClick={() => restartMaze()}>Restart</button>
        </section>
      </main>
  );
}

export default App;
