import React from 'react'
import './discuss.css'

const discuss = (props) => {

  let myclass = `discuss__image ${props.class}`

  return (
    <>
      <div className='discuss__box otherDiscuss__box'>
        <div className={myclass}>
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
