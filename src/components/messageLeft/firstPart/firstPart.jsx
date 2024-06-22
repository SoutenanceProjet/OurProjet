import React from 'react'
import User from '../../../assets/User.jpg'
import logout from '../../../assets/logout.svg'
import setting from '../../../assets/setting.svg'
import { Link } from 'react-router-dom'
import './firstPart.css'

const firstPart = () => {

  const link = '/setting'
  const login = '/'

  return (
    <>
                <div className='firstPart__aside'>
                    <div className='firstPart__imageUser'>
                        <img src={User} alt='User' />
                        <div>User</div>
                    </div>
                    <div className='firstPart__imageSetting'>
                      <Link to={link}>
                        <img src={logout} alt='User' />
                        <div>Setting</div>
                      </Link>
                    </div>
                    <div className='firstPart__imageLogOut'>
                      <Link to={login}>
                          <img src={setting} alt='User' />
                          <div>Log out</div>
                      </Link>
                  </div>
        </div>

    </>
  )
}

export default firstPart
