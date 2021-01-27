import React, { useState } from 'react'
import Entry from './components/Entry'
import FilterPhones from './components/FilterPhones'
import PersonForm from './components/PersonForm'
import Title from './components/Title'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setfilterName ] = useState('')
  const [ displayPeople, setDisplayPeople ] = useState(persons)



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
      {displayPeople.map(person => {
          return <Entry person={person}></Entry>
      })}
    </div>
  )
}

export default App