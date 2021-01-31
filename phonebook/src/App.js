import React, { useState, useEffect } from 'react'
import Entry from './components/Entry'
import FilterPhones from './components/FilterPhones'
import PersonForm from './components/PersonForm'
import Title from './components/Title'
import axios from 'axios'
import peopleServce from './services/people'
import ShowPhones from './components/ShowPhones'
import ErrorNotification from './components/ErrorNotification'
import SuccessNotification from './components/successNotification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setfilterName ] = useState('')
  const [ displayPeople, setDisplayPeople ] = useState(persons)
  const [ errorMsg, setErrorMsg ] = useState(null)
  const [success, setSuccess] = useState('')

  const hook = () => {
    console.log('inside hook');
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
      <ErrorNotification msg={errorMsg} setErrorMsg={setErrorMsg}></ErrorNotification>
      <SuccessNotification msg={success} setSuccess={setSuccess}></SuccessNotification>
      <FilterPhones filterName={filterName} persons={persons} 
      setDisplayPeople={setDisplayPeople} setfilterName={setfilterName}></FilterPhones>

      <PersonForm newName={newName} setNewName={setNewName}
      newNumber={newNumber} setNewNumber={setNewNumber}
      persons = {persons} setPersons={setPersons}
      setDisplayPeople={setDisplayPeople}
      setSuccess={setSuccess}
      ></PersonForm>

      
      <Title text='Numbers'></Title>
      <ShowPhones displayPeople={displayPeople}
      setPersons={setPersons}
      setDisplayPeople={setDisplayPeople}
      setErrorMsg={setErrorMsg}></ShowPhones>
    </div>
  )
}

export default App