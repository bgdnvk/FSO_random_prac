import React from 'react'

const SuccessNotification = ({msg, setSuccess}) => {
    if(!msg){
        return null
    }
    setTimeout( () => {
        setSuccess(null)
    }, 5000)
    return(
        <div className='green'>
            {msg}
        </div>
    )
}
export default SuccessNotification