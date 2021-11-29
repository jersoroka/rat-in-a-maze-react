import { useContext } from 'react';
import Grid from './components/Grid';
import './App.css';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { solveMaze } = useContext(GlobalContext);

  return (
      <main>
        <section className="container">
          <Grid/>
          <button onClick={() => solveMaze()}>Solve</button>
        </section>
      </main>
  );
}

export default App;
