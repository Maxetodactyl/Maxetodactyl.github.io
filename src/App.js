import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Maxetow's Wiki</h1>
        <p>
          Your go-to source for all information about Maxetow! Explore articles, get the latest updates, and contribute to our growing knowledge base.
        </p>
        <a
          className="App-link"
          href="https://www.example-wiki.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Wiki
        </a>
      </header>
    </div>
  );
}

export default App;
