import React from 'react';
import './Message.css';

function Message ({ text, isSender }){
  return (
    <div className={`message ${isSender ? 'sender' : 'receiver'}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
