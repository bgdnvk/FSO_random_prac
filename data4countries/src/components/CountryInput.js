import React, {useState} from 'react'

const CountryInput = ({query, setQuery, showCountries}) => {
    const handleQuery = (e) => {
        const q = e.target.value
        console.log(q);
        setQuery(q)
        showCountries()
    }
    
    return(
        <div>
            <h2>find country</h2>
            <input value={query}
            onChange={handleQuery}></input>
        </div>
        
    )
}
export default CountryInput