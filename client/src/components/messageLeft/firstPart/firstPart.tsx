import UserLogo from '../../../assets/User.jpg';
import logout from '../../../assets/logout.svg';
import setting from '../../../assets/setting.svg';
import { Link } from 'react-router-dom';
import './firstPart.css';
import { useEffect, useState } from 'react';
import { User, useApp } from '../../../providers/app.provider';
import { api } from '../../../api';
import { capitalize } from '../../../utils';

const FirstPart = () => {
  const link: string = '/setting';
  const login: string = '/';

  const [user, setUser] = useState<User | null>(null);
  const { setUser: setAppUser } = useApp();

  async function getCurrentUser() {
    const response = await api.get('users/me');
    setUser(response.data as User);
    setAppUser(response.data as User);
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <div className="firstPart__aside">
        <div className="firstPart__imageUser">
          {user?.photo ? (
            <img
              src={user?.photo}
              alt="User"
            />
          ) : (
            <img
              src={UserLogo}
              alt="User"
            />
          )}
          <div>{capitalize(user?.username ?? '')}</div>
        </div>
        <div className="firstPart__bottom_wrapper">
          <Link to={link}>
            <div className="firstPart__imageSetting">
              <img
                src={setting}
                alt="User"
              />
              <div>Setting</div>
            </div>
          </Link>
          <Link to={login}>
            <div className="firstPart__imageLogOut">
              <img
                src={logout}
                alt="User"
              />
              <div>Log out</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FirstPart;
