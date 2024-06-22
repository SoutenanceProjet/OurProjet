import React from 'react'
import './discuss.css'

const discuss = (props) => {
  return (
    <>
      <div className='discuss__box'>
        <div className='discuss__image'>
            <img src={props.road} alt='contactImg' />
        </div>
        <div className='discuss__message'>
            <p className='discuss__name'>{props.title}</p>
            <p className='discuss__fewDescription'>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default discuss
