import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import { useState, useRef } from 'react';
import './MessageBox.css';
import { Conversation } from '../messageLeft/secondPart/secondPart';
import { useApp } from '../../providers/app.provider';
import { encryptMessageFromKey } from '../../utils';
import { api } from '../../api';

type Props = {
  conversation?: Conversation;
  id?: string;
  onSent: () => Promise<void>;
};

const MessageBox = ({ conversation, id = '', onSent }: Props) => {
  const { user } = useApp();

  const [message, setMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (message.trim() !== '') {
      console.log('Message envoyé :', message, conversation, user);
      const receiver =
        conversation?.receiver.id !== user?.id
          ? conversation?.receiver
          : conversation?.sender;

      const senderEncryptedMessage = await encryptMessageFromKey(
        user?.publicKey ?? '',
        message,
      );
      const receiverEncryptedMessage = await encryptMessageFromKey(
        receiver?.publicKey ?? '',
        message,
      );

      const response = await api.post('messages', {
        content: JSON.stringify({
          sender: senderEncryptedMessage,
          receiver: receiverEncryptedMessage,
        }),
        senderId: user?.id ?? '',
        receiverId: receiver?.id ?? '',
        conversationId: id,
      });
      console.log(response.data);
      setMessage('');
      onSent();
    }
  };

  const handleAttachClick = () => {
    const fileInputRefreceiver = fileInputRef.current;

    if (fileInputRefreceiver) fileInputRefreceiver?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Fichier attaché :', file.name);
    }
  };

  return (
    <>
      <div className="message-box">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <div className="chat-container">
          <div className="paper-clip">
            <FaPaperclip
              className="attach-icon"
              size={24}
              onClick={handleAttachClick}
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tapez un message..."
          />

          <button
            className="send-button"
            onClick={handleSend}>
            <FaPaperPlane size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
