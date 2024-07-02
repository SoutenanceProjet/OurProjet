import './Message.css';

interface MessageProps {
  text: string,
  isSender: boolean
}

function Message ({ text, isSender } : MessageProps){
  return (
    <div className={`message ${isSender ? 'sender' : 'receiver'}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
