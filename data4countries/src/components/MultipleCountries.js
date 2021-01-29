import React from 'react'

const MultipleCountries = ({countriesDisplay, setCountriesDisplay}) => {
    const onclick = (country) => {
        // const val = e.target.value
        // console.log('clicked', val[0]);
        // console.log('clicked', val.name);
        console.log(country);
        console.log('CLICKED and', country);
        setCountriesDisplay([country])
    }
    
    return(
        <div>
        <ul>
            {
            countriesDisplay.map(country => {
                return <li>{country.name} 
                <button onClick={()=>onclick(country)}>show</button></li> 
                })
            }
        </ul>
           
        </div>
    )
}
export default MultipleCountries