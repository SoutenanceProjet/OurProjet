import { Header } from '../../../components/messageRight/Header.tsx';
import MessageList from '../../../components/messageRight/MessageList.tsx';
import MessageBox from '../../../components/messageRight/MessageBox.tsx';
import './messageRight.css';

interface User {
  name: string;
  profile: string;
  active: boolean;
}

function MessageRight() {
  const user: User = {
    name: 'Elisé',
    profile: '',
    active: true,
  };

  const messages = [
    { text: 'Bonjour Orens!', sender: 'Elisé' },
    { text: 'Salut', sender: 'Orens' },
    { text: 'Comment cv?', sender: 'Elisé' },
    { text: 'je vais bien et toi?', sender: 'Orens' },
  ];

  return (
    <>
      <div className="area">
        <div>
          <Header
            name={user.name}
            profile={user.profile}
            active={user.active}
          />
          <MessageList
            messages={messages}
            currentUser={user.name}
          />
        </div>
        <div>
          <MessageBox />
        </div>
      </div>
    </>
  );
}

export default MessageRight;
