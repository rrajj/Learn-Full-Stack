
const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}


// const Content = (props) => {
// to send the whole object
const Content = ({props}) => {
return (
    // Exercise 1.1
    // <div>
    //   <p>{props.part} {props.exercise}</p>
    // </div>

    // Exercise 1.2
    // <div>
    //   <p>{props[0].part} {props[0].ex}</p>
    //   <p>{props[1].part} {props[1].ex}</p>
    //   <p>{props[2].part} {props[2].ex}</p>
    // </div>

    // Exercise 1.3
    // <div>
    //   <p>{props.name} {props.exercises}</p>
    // </div>

    // Exercise 1.4
    <div>
      <p>{props[0].name} {props[0].exercises}</p>
      <p>{props[1].name} {props[1].exercises}</p>
      <p>{props[2].name} {props[2].exercises}</p>

    </div>
  )
}


/* Total */
// const Total = (props) => {

// Exercise 1.4
const Total = ({props}) => {

  return (
    // <div>
    //   <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    // </div>

    // Exercise 1.4
    <div>
      <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
    </div>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   const data = [
//     {part: 'Fundamentals of React', ex: 10},
//     {part: 'Using props to pass data', ex: 7},
//     {part: 'State of a component', ex: 14}
//   ]

//   return (
//     <>
//       <Header course={course}/>
//       {/* <Content part={part1} exercise={exercises1}/>
//       <Content part={part2} exercise={exercises2}/>
//       <Content part={part3} exercise={exercises3}/> */}
//       <Content props={data}/>
//       <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
//     </>
//   )
// }


// Exercise 1.3
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//     <Header course={course} />
//     <Content props={part1} />
//     <Content props={part2} />
//     <Content props={part3} />
//     <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
//     </div>
//   )
// }


// // Exercise 1.4
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     }, 
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content props={parts}/>
//       <Total props={parts}/>
//     </div>
//   )
// }


// Exercise 1.5
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}

export default App