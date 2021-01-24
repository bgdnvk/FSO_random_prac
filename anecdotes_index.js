import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ButtonRandom = ({text, setState}) => {
    const randomNum = () => Math.floor(Math.random()*6)
    const onclick = () => {
        setState(randomNum)
    }
    return(
        <button onClick={onclick}>{text}</button>
    )
}

const ButtonVote = ({text, votes, setVotes, selected}) => {
    const onclick = () => {
        console.log('votes: ', votes);
        console.log('selected', selected);
        const copy = [...votes]
        console.log('copy', copy);
        copy[selected] += 1
        setVotes(copy) 
    }
    return(
        <button onClick={onclick}>{text}</button>
    )
}

const Head = ({text}) => <h1>{text}</h1>

const MostVoted = ({votes, anecdotes}) => <div> {anecdotes[votes.indexOf(Math.max(...votes))]}</div>



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  

  return (
    <div>
        <Head text='Anecdote of the day'></Head>
      {props.anecdotes[selected]}
      <br></br>
      <ButtonRandom text='random' setState={setSelected}></ButtonRandom>
      <ButtonVote text='vote' votes={votes} setVotes={setVotes} 
      selected={selected}></ButtonVote>
      <Head text='Anecdote with most votes'></Head>
      <MostVoted votes={votes} anecdotes={props.anecdotes}></MostVoted>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
