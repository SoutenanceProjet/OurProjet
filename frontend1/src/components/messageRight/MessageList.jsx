import React from 'react';
import Message from './Message.jsx';
import './MessageList.css';

function MessageList({ messages, currentUser }){
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message 
          key={index}
          text={message.text}
          isSender={message.sender === currentUser}
        />
      ))}
    </div>
  );
};

export default MessageList;
