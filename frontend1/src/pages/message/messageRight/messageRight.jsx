
import { Header } from "../../../components/messageRight/Header.jsx";
import MessageList from "../../../components/messageRight/MessageList.jsx";
import MessageBox from "../../../components/messageRight/MessageBox.jsx";
import './messageRight.css'



function MessageRight() {

    const user = {
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
                    <Header name={user.name} profile={user.profile} active={user.active} />
                    <MessageList messages={messages} currentUser={user.name} />
                </div>
                <div>
                    <MessageBox />
                </div>
        </div>
    </>
    );
}

export default MessageRight;


