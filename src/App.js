import { useContext, useEffect } from 'react';
import Grid from './components/Grid';
import './App.css';
import { GlobalContext } from './context/GlobalState';
import { cloneDeep } from 'lodash';
import { flushSync } from 'react-dom';
import { timer } from './context/Helpers'

function App() {
  const { grid, restartMaze, solveMaze, setIsRoute } = useContext(GlobalContext);

  useEffect(() => {
    console.log("changed")
  }, [grid])

  async function toyColourChange() {
    for (let i = 0; i < 5; i++) {
      let square;
      square = cloneDeep(grid[i][i]);
      square.isRoute = true;
      // await new Promise(res => setTimeout(res, 1000))
      await timer();
      // flushSync(() => setIsRoute(square.pos, square.isRoute));
      setIsRoute(square.pos, square.isRoute);
    }

    // let square;
    // square = cloneDeep(grid[0][0]);
    // square.isRoute = true;
    // flushSync(() => setIsRoute(square))

    // square = cloneDeep(grid[1][1]);
    // square.isRoute = true;
    // flushSync(() => setIsRoute(square))
    
  }

  return (
      <main>
        <section className="container">
          <Grid/>
          {/* <button onClick={() => solveMaze()}>Solve</button> */}
          <button onClick={() => restartMaze()}>Restart</button>
          <button onClick={(() => toyColourChange())}>Tester</button>
        </section>
      </main>
  );
}

export default App;
