import { useEffect, useState } from 'react';
import { Header } from '../../../components/messageRight/Header';
import MessageBox from '../../../components/messageRight/MessageBox';
import MessageList from '../../../components/messageRight/MessageList';
import { Conversation } from '../../../components/messageLeft/secondPart/secondPart';
import { useParams } from 'react-router-dom';
import { api } from '../../../api';

export function DirectMessage() {
  const [conversation, setConversation] = useState<Conversation>();
  const { id } = useParams();
  console.log(id);

  async function getConversation() {
    const response = await api.get(`conversations/${id}`);
    setConversation(response.data);
  }

  useEffect(() => {
    getConversation();
  }, [id]);

  return (
    <>
      <div className="area">
        <div>
          <Header
            name={conversation?.sender.username ?? ''}
            profile={conversation?.sender.photo ?? ''}
            active={true}
          />
          <MessageList
            messages={conversation?.messages ?? []}
            currentUser={''}
          />
        </div>
        <div>
          <MessageBox />
        </div>
      </div>
    </>
  );
}
