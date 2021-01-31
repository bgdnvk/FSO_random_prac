import React from 'react'
import peopleService from '../services/people'

const PersonForm = ({newName, newNumber, setNewName, setNewNumber, persons, setPersons, setDisplayPeople
, setSuccess}) => {

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
          // console.log('checkin name', checkName(newName, persons).id);
          if(checkName(newName, persons)) {
            const r = window.confirm('update number?')
            if(r){
              const id = checkName(newName, persons).id
              peopleService
                .update(id, objName)
                .then( res => {
                  const newList = persons.map( person => person.id !== id? person: res)
                  setPersons(newList)
                  setDisplayPeople(newList)
                })
            } else{
              alert('cant add same name')
            }

          } else{
            // setPersons(persons.concat(objName))
            // setDisplayPeople(persons.concat(objName))
            peopleService
              .create(objName)
              .then( res => {
                console.log('added', res);
                setPersons(persons.concat(res))
                setDisplayPeople(persons.concat(res))
                setSuccess(`added ${res.name}!`)
              })
          }
          setNewName('')
          setNewNumber('')
          
      }
    
    return(
        <div>
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

        </div>
    )
}
export default PersonForm