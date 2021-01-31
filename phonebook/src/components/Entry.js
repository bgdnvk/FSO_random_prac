import React from 'react'
import peopleService from '../services/people'

const Entry = ({person, setPersons, setDisplayPeople, displayPeople, setErrorMsg}) => {
    const onclick = () => {
        const r = window.confirm("delete?")
        console.log(person);
        if(r){
            peopleService
                .remove(person.id)
                .then(res => {
                    console.log(res);
                    setDisplayPeople(
                        displayPeople.filter(p => p.id !== person.id)
                    )
                })
                .catch( e => {
                    setErrorMsg('already removed!')
                    setTimeout(() => {
                        setErrorMsg(null)
                    }, 5000)
                })
        }
    }
    return(
        <div>
            {person.name} {person.number} <button onClick={onclick}>delete</button>
        </div>
    )
}
export default Entry