import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import { useState, useRef } from 'react';
import './MessageBox.css';

const MessageBox = () => {
    const [message, setMessage] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSend = () => {
        if (message.trim() !== '') {
            console.log('Message envoyé :', message);
            setMessage('');
        }
    };

    const handleAttachClick = () => {
        const fileInputRefreceiver = fileInputRef.current

        if(fileInputRefreceiver)
            fileInputRefreceiver?.click();
    };

    const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Fichier attaché :', file.name);
        }
    };

    return (


    <>
        <div className="containerBox">
            <div className="chat-container">
                <div className="message-input">
                    <FaPaperclip className="attach-icon" size={24} onClick={handleAttachClick} />

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tapez un message..."
                    />
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <button className="send-button" onClick={handleSend}>
                    <FaPaperPlane size={24} />
                </button>

            </div>
        </div>
        </>
    );
};

export default MessageBox;
