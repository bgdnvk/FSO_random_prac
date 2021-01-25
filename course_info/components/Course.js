import React from 'react'
import Header from './course/Header'
import Content from './course/Content'
import TotalSum from './course/TotalSum'

const Course = ({courseName, parts}) => {
    return(
        <div>
            <Header course={courseName}></Header>
            <Content parts={parts}></Content>
            <TotalSum parts={parts}></TotalSum>
        </div>
    )
}

export default Course