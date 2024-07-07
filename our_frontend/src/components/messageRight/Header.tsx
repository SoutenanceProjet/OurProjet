
// import { FaUserCircle } from "react-icons/fa";
// import './Header.css';


// export function Header(user): any {

//     let status1: any = "En ligne";
//     let status2: any = "";

//     return <>
//           <div className="nav-top">
             
//                    <div className="UserImage">
//                        {(user.profile)? (<img src ={user.profile} alt = "Profil"/>) : (<FaUserCircle />)}
//                    </div>

//                    <div>
//                        <span>{user.name}k</span>
//                        <span>{(user.active) ? status1 : status2}</span>
//                    </div>

//           </div>
    
//     </>
// }


import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

interface HeaderProps {
  name: string;
  profile: string;
  active: boolean;
}

export function Header({ name, profile, active }: HeaderProps) {
  const status1: string = "En ligne";
  const status2: string = "";

  return (
    <div className="nav-top">
      <div className="user-image">
        {profile ? (
          <img src={profile} alt="Profil" />
        ) : (
          <FaUserCircle className="default-icon" />
        )}
      </div>
      <div className="user-info">
        <span className="user-name">{name}</span>
        <span className="user-status">{active ? status1 : status2}</span>
      </div>
    </div>
  );
}
