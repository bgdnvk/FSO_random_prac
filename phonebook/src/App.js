import React, { useState, useEffect } from 'react'
import Entry from './components/Entry'
import FilterPhones from './components/FilterPhones'
import PersonForm from './components/PersonForm'
import Title from './components/Title'
import axios from 'axios'
import peopleServce from './services/people'
import ShowPhones from './components/ShowPhones'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setfilterName ] = useState('')
  const [ displayPeople, setDisplayPeople ] = useState(persons)

  const hook = () => {
    console.log('inside hook');
    // axios
    //   .get('http://localhost:3001/persons')
    //   .then(res => {
    //     setPersons(res.data)
    //     setDisplayPeople(res.data)
    //   })
    peopleServce
      .getAll()
      .then(people => {
        setPersons(people)
        setDisplayPeople(people)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <Title text='Phonebook'></Title>
      <FilterPhones filterName={filterName} persons={persons} 
      setDisplayPeople={setDisplayPeople} setfilterName={setfilterName}></FilterPhones>

      <PersonForm newName={newName} setNewName={setNewName}
      newNumber={newNumber} setNewNumber={setNewNumber}
      persons = {persons} setPersons={setPersons}
      setDisplayPeople={setDisplayPeople}
      ></PersonForm>

      
      <Title text='Numbers'></Title>
      <ShowPhones displayPeople={displayPeople}></ShowPhones>
    </div>
  )
}

export default App