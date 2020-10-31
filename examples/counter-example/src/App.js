import logo from './logo.svg';
import './App.css';
import {HomebaseProvider, useEntity, useTransact} from 'homebase-react';

const config = {
  initialData: [{
    counter: {
      identity: 'counter',
      count: 0
    }
  }]
}

export const OurApp = () => (
  <HomebaseProvider config={config}>
    <Counter/>
  </HomebaseProvider>
)

const Counter = () => {
  const [counter] = useEntity({ identity: 'counter' })
  const [transact] = useTransact()
  return (
    <div>
      Count: {counter.get('count')}
      <div>
        <button onClick={() => transact([{
          counter: {
            id: counter.get('id'),
            count: counter.get('count') + 1
          }
        }])}>
          Increment
        </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click to "Increment" to increment counter.
        </p>
        <OurApp/>
      </header>
    </div>
  );
}

export default App;
