import logo from './logo.svg';
import './App.css';
import React from 'react';

// DEFAULT
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>EDITTED</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


// new component
const Hello = () => {
  return (
    <div>
      <p>Hello from NEW COMPONENT: Hello</p>
    </div>
  )
}

const App = () => {
  // to log in the console
  // console.log("Hello from Component")

  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  return (
    <div>
      <h1>Greetings</h1>
      <Hello/>
      <Hello/>
    </div>
  )


  // return HTML markup
  /*
  return (
    <div>
      <p>Hello World, it is now {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
  */


  // return JSX
  /*
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello World, it is', now.toString()
    ),
    React.createElement(
    'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
  */
}

export default App;
