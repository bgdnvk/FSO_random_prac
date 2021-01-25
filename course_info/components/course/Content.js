import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
    return(
      <div>
        <ul>
            {parts.map(
                part => <Part name={part.name} exercise={part.exercises} key={part.id}></Part>
            )}
        </ul>
      </div>
    )
  }

  export default Content