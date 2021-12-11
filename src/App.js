import { useContext, useEffect, useState } from 'react';
import Grid from './components/Grid';
import './App.css';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { restartMaze, setMazeLength, solveMaze } = useContext(GlobalContext);
  const [length, setLength] = useState(10);

  useEffect(() => {
    setMazeLength(length);
  }, [length])

  return (
      <main>
        <section className="container">
          <Grid/>
          <button onClick={() => solveMaze()}>Solve</button>
          <button onClick={() => restartMaze()}>Restart</button>
          <label for="mazeSize">Enter the size of the maze</label>
          <input for="mazeSize" type="number" min="2" max="100" onChange={e => {setLength(e.target.value)}}/>
        </section>
      </main>
  );
}

export default App;
