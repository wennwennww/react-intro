// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('%c always call this effect ', 'color: #0f5');
  })

  useEffect(() => {
    console.log('%c call this effect once', 'color: #fda');
  }, [])

  useEffect(() => {
    console.log('%c call this effect when count is change', 'color: #faa');
  }, [count])

  return (
    <div className="App">
      <button onClick={() => {
        setCount((oldVal) => {
          return oldVal + 1;
        })
      }}>Add</button>

      <p style={{color: '#ff0000', fontSize: 20}}>{count}</p>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    </div>
  );
}

export default App;
