
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
    <div>
      <p>{props[0].part} {props[0].ex}</p>
      <p>{props[1].part} {props[1].ex}</p>
      <p>{props[2].part} {props[2].ex}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const data = [
    {part: 'Fundamentals of React', ex: 10},
    {part: 'Using props to pass data', ex: 7},
    {part: 'State of a component', ex: 14}
  ]

  return (
    <>
      <Header course={course}/>
      {/* <Content part={part1} exercise={exercises1}/>
      <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/> */}
      <Content props={data}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </>
  )
}

export default App