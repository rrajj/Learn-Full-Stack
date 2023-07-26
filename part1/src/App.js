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

// component with props
const Greet = (props) => {
  return (
    <div>
      <p>Greetings, {props.name}</p>
    </div>
  )
}

// multiple props
const Props2 = (props) => {
  // logging
  console.log(props)
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

// react comoponent names must be capitalized
// NEEDS TO START WITH CAPITAL LETTER
// footer -> wont work
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}


// MAIN APP
const App = () => {
  // to log in the console
  // console.log("Hello from Component")

  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  const friends = [
    {name: 'Peter', age: 5},
    {name: 'Mia', age: 10}
  ]

  const strings = ["A", "B"]
  
  return (
    /*
    removed <div> tag because it was extra element in DOM tree
    used fragments i.e. wrapping the elements to be returned by the
    the compponent with an empty element
    <div>
    */
    <>
      <h1>Greetings</h1>
      <Hello/>
      <Hello/>

      {/* calling new component with props */}
      <Greet name="George"/>
      <Greet name="Daisy"/>

      {/* calling new component with multiple props */}
      <Props2 name="John" age="35"/>
      <Props2 name="Jack" age={25+35}/>
      <Props2 name="Ben" age={b}/>


      {/* DONOT RENDER OBJECTS */}
      <br></br>
      <h3>Using as array of dicts kinda. Donot render objects</h3>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>

      <br></br>
      <h3>if array contains values that are eligible for rendering BUT result would be kinda weird</h3>
      <p>{strings}</p>
      <Footer/>
    </>
    // </div>
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
