
// import { FaUserCircle } from "react-icons/fa";
// import './Header.css';


// export function Header(user){

//     let status1 = "En ligne";
//     let status2 = "";

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


import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

export function Header({ name, profile, active }) {
  const status1 = "En ligne";
  const status2 = "";

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
