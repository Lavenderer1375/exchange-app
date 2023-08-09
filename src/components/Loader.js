import React from 'react'

//Gif
import spinner from "../gif/Spinner-0.9s-211px.gif"

const Loader = () => {
  return (
    <div>
        <img src={spinner} alt='Loading' />
        <h1>Loading...</h1>
    </div>
  )
}

export default Loader