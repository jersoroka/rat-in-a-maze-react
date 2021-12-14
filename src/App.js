import { useContext, useEffect } from 'react';
import Grid from './components/Grid';
import './App.css';
import { GlobalContext } from './context/GlobalState';
import { cloneDeep } from 'lodash';
import { timer } from './context/Helpers'

function App() {
  const { grid, restartMaze, solveMaze, setIsRoute } = useContext(GlobalContext);

  useEffect(() => {
    console.log("changed")
  }, [grid])

  // async function toyColourChange() {
  //   for (let i = 0; i < 5; i++) {
  //     let square;
  //     square = cloneDeep(grid[i][i]);
  //     square.isRoute = true;
  //     await timer();
  //     setIsRoute(square.pos, square.isRoute);
  //   }
  // }

  return (
      <main>
        <section className="container">
          <Grid/>
          <button onClick={() => solveMaze()}>Solve</button>
          <button onClick={() => restartMaze()}>Restart</button>
          {/* <button onClick={(() => toyColourChange())}>Tester</button> */}
        </section>
      </main>
  );
}

export default App;
