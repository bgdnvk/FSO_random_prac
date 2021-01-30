import React from 'react'
import Weather from './Weather'

const SingleCountry = ({countriesDisplay}) => {
    

    console.log(countriesDisplay[0]);
    const c = countriesDisplay[0]
    console.log(c.languages);
    return(
        <div>
            <h2>{c.name}</h2>
            <div>
            capital {c.capital}
            </div>
            <div>
                {`population ${c.population}`}
            </div>
            <h2>languages</h2>
             <ul>
                 {c.languages.map(lang => <li>{lang.name}</li>)}
             </ul>
             <img src={c.flag} width='200'></img>
             <Weather city={c.capital}></Weather>
        </div>
    )
}
export default SingleCountry