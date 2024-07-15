import { useEffect, useState } from 'react';
import './Message.css';
import { decryptMessageFromKey } from '../../utils';
import { useApp } from '../../providers/app.provider';

interface MessageProps {
  content: string;
  isSender: boolean;
  scrollToEnd: () => void;
}

function Message({ content, isSender, scrollToEnd }: MessageProps) {
  const [text, setText] = useState<string>('');
  const { user } = useApp();

  const decryptContent = async (content: string) => {
    const { sender, receiver } = JSON.parse(content);
    console.log(sender, receiver, isSender, 'infos');
    const message = await decryptMessageFromKey(
      user?.privateKey ?? '',
      isSender ? sender : receiver,
    );
    setText(message);
    scrollToEnd();
  };

  useEffect(() => {
    decryptContent(content);
  }, [content]);

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
