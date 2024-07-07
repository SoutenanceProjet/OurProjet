import SearchBar from '../searchBar/searchBar';
import Discuss from '../discuss/discuss';
import './secondPart.css';
import { useEffect, useState } from 'react';
import { User, useApp } from '../../../providers/app.provider';
import { api } from '../../../api';

export type Conversation = {
  sender: User;
  receiver: User;
  user?: User;
  lastMessage?: { content: string };
};

const SecondPart = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [search, setSearch] = useState<string>('');
  const { user } = useApp();

  console.log(search, 'search');

  async function getConversations(search?: string) {
    const response = await api.get(
      `conversations${search ? '?search=' + search : ''}`,
    );
    const _conversations = response.data as Conversation[];

    setConversations(
      _conversations.map((c) => ({
        ...c,
        user: c.sender.id === user?.id ? c.receiver : c.sender,
      })),
    );
  }

  useEffect(() => {
    getConversations(search);
  }, [search]);

  return (
    <>
      <div className="second">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
        {conversations.map((c) => (
          <Discuss
            key={c.user?.id}
            road={c.user?.photo ?? ''}
            title={c.user?.username ?? ''}
            description={c.lastMessage?.content ?? ''}
          />
        ))}
      </div>
    </>
  );
};

export default SecondPart;
