import './Message.css';

interface MessageProps {
  text: string;
  isSender: boolean;
}

function Message({ text, isSender }: MessageProps) {
  return (
    <>
      <div className={`message ${isSender ? 'sender' : 'receiver'}`}>
        <p>{text}</p>
      </div>
      <div className={`${isSender ? 'sender' : 'receiver'}`}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
}

export default Message;
