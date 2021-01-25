import React from 'react'
import Course from './Course'

const Courses = ({courses}) => {
    console.log(courses)
    return(
        <div>
            {courses.map( course => 
                <Course courseName={course.name} parts={course.parts} key={course.id}></Course>
            )}
        </div>
    )
}
export default Courses