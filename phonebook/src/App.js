import React, { useState } from 'react'
import Entry from './components/Entry'

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

  const checkName = (name, arr) => {
    return arr.find(entry => entry.name.toLowerCase() === name.toLowerCase())
  }

  const handleNameChange = (e) => {
    console.log('changin name', e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => setNewNumber(e.target.value)

  const addEntry = (e) => {
      e.preventDefault()
      console.log('wanna add',newName)
      const objName = {
        name: newName,
        number: newNumber
      }
      // checkName(newName, persons) 
      // ? alert('same name')
      // : setPersons(persons.concat(objName))

      if(checkName(newName, persons)) {
        alert('same name')
      } else{
        setPersons(persons.concat(objName))
        setDisplayPeople(persons.concat(objName))
      }
      setNewName('')
      setNewNumber('')
      
  }

  const handleFilterName = (e) => {
    const name = e.target.value.toLowerCase()
    setfilterName(name)
    let newArr = []
    for(let person of persons) {
        if(person.name.toLowerCase().includes(name)){
          // console.log('name ', name);
          // console.log('person name ', person.name);
          // console.log('includes!');
          newArr.push(person)
        }
    }
    console.log('new people is', newArr);
    newArr.length >= 1
    ? setDisplayPeople(newArr)
    : setDisplayPeople(persons)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <input value={filterName}
      onChange={handleFilterName}></input>

      <form onSubmit={addEntry}>
        <h1>add new name</h1>
        <div>
          name: 
          <input value={newName}
              onChange={handleNameChange}
          />
        </div>
        <div>
          phone:
          <input value={newNumber}
            onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {displayPeople.map(person => {
          return <Entry person={person}></Entry>
      })}
    </div>
  )
}

export default App