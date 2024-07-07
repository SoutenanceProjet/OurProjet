import Message from './Message.tsx';
import './MessageList.css';

interface MessageListProp {
  messages: MessagePropsSend[];
  currentUser: string;
}

interface MessagePropsSend {
  text: string;
  sender: string;
}

function MessageList({ messages, currentUser }: MessageListProp) {
  return (
    <div className="message-list">
      {messages.map((message) => (

        <Message
          text={message.text}
          isSender={message.sender === currentUser}
        />
      ))}
    </div>
  );
};

export default MessageList;