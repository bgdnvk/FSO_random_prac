import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryInput from './components/CountryInput'
import FilteredCountries from './components/FilterCountry'

const App = () => {
  const [ countries, setCountries] = useState('')
  const [ query, setQuery] = useState('')
  const [ countriesDisplay, setCountriesDisplay ] = useState([])


  console.log(countriesDisplay)
  const getCountriesHook = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      setCountries(res.data)
      console.log(res.data)
    })
  }
  useEffect(getCountriesHook, [])

  const showCountries = () => {
    const temp = [];

    if(countries){
        countries.forEach(country => {
            // console.log(country.name);
            // console.log(...country.name);
            // console.log([...country.name].includes(query));
            if(country.name.toLowerCase().includes(query.toLowerCase())){
                temp.push(country)
            }
        });
        
    }
    setCountriesDisplay(temp)
    console.log('countriesDisplay', countriesDisplay);
  }

  return(
    <div>
      <CountryInput query={query} setQuery={setQuery}
      showCountries={showCountries}></CountryInput>
      <FilteredCountries countriesDisplay={countriesDisplay}
      setCountriesDisplay={setCountriesDisplay}
      ></FilteredCountries>
    </div>
    
  )
}
export default App;
