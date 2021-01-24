import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Head = ({text}) => <h2>{text}</h2>
const Button = ({text, buttonState, setButton}) =>{ 

  const onclick = () => {
    setButton(buttonState+1)
  } 

  return(
    <button onClick={onclick}>{text}</button>
  )
}
const Stat = ({text, value}) => <p>{text} {value}</p>
const Stats = ({good, neutral, bad}) =>{

  if(!good && !neutral && !bad){
    return(
      <div>
        <p>no feedback</p>
      </div>
    )
  }

  return(
    <div>
      <Stat text='good' value={good}></Stat>
      <Stat text='neutral' value={neutral}></Stat>
      <Stat text='bad' value={bad}></Stat>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Head text='give feedback'></Head>
      <Button text='good' buttonState={good} setButton={setGood}></Button>
      <Button text='neutral' buttonState={neutral} setButton={setNeutral}></Button>
      <Button text='bad' buttonState={bad} setButton={setBad}></Button>

      <Head text='statistics'></Head>
      <Stats good={good} neutral={neutral} bad={bad}></Stats>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
