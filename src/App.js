import Grid from './components/Grid';
import './App.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <main>
        <section className="container">
          <Grid/>
        </section>
      </main>
    </GlobalProvider>
  );
}

export default App;
