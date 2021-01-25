import React from 'react'
const TotalSum = ({parts}) => {
    const totalExercises = parts.reduce((acc, curr) => {
      return acc + curr.exercises
    }, 0)
    return(
      <div>
        <p>Total of <b> {totalExercises} </b> exercises</p>
      </div>
    )
  }

export default TotalSum