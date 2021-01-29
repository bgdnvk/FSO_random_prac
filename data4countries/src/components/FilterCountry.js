import React from 'react'
import MultipleCountries from './MultipleCountries';
import SingleCountry from './SingleCountry';

const FilteredCountries = ({countriesDisplay, setCountriesDisplay}) => {
    
   console.log('inside filtered', countriesDisplay);

   const Countries = () => {
       console.log(countriesDisplay);
       if(countriesDisplay.length === 1){
           
        //  return countriesDisplay[0].name
            return <SingleCountry countriesDisplay={countriesDisplay}
            ></SingleCountry>
        }
       if(countriesDisplay.length <= 10){
            return <MultipleCountries countriesDisplay={countriesDisplay}
            setCountriesDisplay={setCountriesDisplay}></MultipleCountries>
       }
       
       return 'Too many countries fit the query'
   }


    return(
        <div>
            <Countries></Countries>           
        </div>
    )
}
export default FilteredCountries