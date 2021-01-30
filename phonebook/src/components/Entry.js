import React from 'react'
import peopleService from '../services/people'

const Entry = ({person}) => {
    const onclick = () => {
        
    }
    return(
        <div>
            {person.name} {person.number} <button onClick={onclick}>delete</button>
        </div>
    )
}
export default Entry