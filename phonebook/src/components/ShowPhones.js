import React from 'react'
import Entry from './Entry'

const ShowPhones = ({displayPeople}) => {
    return(
        <div>
        {displayPeople.map(person => {
          return <Entry person={person}></Entry>
         })}
        </div>
    )
}

export default ShowPhones