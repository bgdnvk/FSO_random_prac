import React from 'react'

const ErrorNotification = ({msg}) => {
    if(msg === null){
        return null
    }
    return(
        <div className='error'>
            {msg}
        </div>
    )
}
export default ErrorNotification