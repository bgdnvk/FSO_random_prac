import React from 'react'

const FilterPhones = ({filterName, persons, setfilterName, setDisplayPeople}) => {
    const handleFilterName = (e) => {
        const name = e.target.value.toLowerCase()
        setfilterName(name)
        let newArr = []
        for(let person of persons) {
            if(person.name.toLowerCase().includes(name)){
              // console.log('name ', name);
              // console.log('person name ', person.name);
              // console.log('includes!');
              newArr.push(person)
            }
        }
        console.log('new people is', newArr);
        newArr.length >= 1
        ? setDisplayPeople(newArr)
        : setDisplayPeople(persons)
    
      }
    return(
        <div>
            <input value={filterName}
            onChange={handleFilterName}></input>
        </div>
    )
}

export default FilterPhones