import React from 'react'
import MessageRight from './messageRight/messageRight'
import MessageLeft from './messageLeft/messageLeft'
import './message.css'

const message = () => {
  return (
    <>
      <div className="main">
                <div className="aside"> 
                    <MessageLeft />
                    <MessageRight />
                </div>
        </div>
    </>
  )
}

export default message
