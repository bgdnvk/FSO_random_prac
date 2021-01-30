import React from 'react'
import Entry from './Entry'

const ShowPhones = ({displayPeople, setPersons
    ,setDisplayPeople}) => {
    return(
        <div>
        {displayPeople.map(person => {
          return <Entry person={person}
          setPersons={setPersons}
          setDisplayPeople={setDisplayPeople}
          displayPeople={displayPeople}></Entry>
         })}
        </div>
    )
}

export default ShowPhones