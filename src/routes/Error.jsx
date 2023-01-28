import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
  return(
    <div className='container'>
        <h1>Error</h1>
        <p> {error.statusText || error.message} </p>
        <p>Error</p>
    </div>
  )
}

export default Error