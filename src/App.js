import logo from './logo.svg';
import Counter from './Components/Counter'
import Greeting from './Components/Greeting'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reac sesit
        </a>
        <Counter />
        <br />
        <Greeting />
      </header>
    </div>
  );
}

export default App;
