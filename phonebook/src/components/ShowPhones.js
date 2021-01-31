import React from 'react'
import Entry from './Entry'

const ShowPhones = ({displayPeople, setPersons
    ,setDisplayPeople, setErrorMsg}) => {
    return(
        <div>
        {displayPeople.map(person => {
          return <Entry person={person}
          setPersons={setPersons}
          setDisplayPeople={setDisplayPeople}
          displayPeople={displayPeople}
          setErrorMsg={setErrorMsg}></Entry>
         })}
        </div>
    )
}

export default ShowPhones