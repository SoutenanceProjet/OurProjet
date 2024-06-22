import React from 'react'
import FirstPart from './firstPart/firstPart'
import SecondPart from './secondPart/secondPart'
import './messageRight.css'

const messageRight = () => {
  return (
    <>
      <div className="main">
            <div className="aside">
                <FirstPart />
                <SecondPart />
            </div>
        </div>
    </>
  )
}

export default messageRight
