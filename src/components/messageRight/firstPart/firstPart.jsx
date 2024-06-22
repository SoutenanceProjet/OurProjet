import React from 'react'
import User from '../../../assets/User.jpg'
import logout from '../../../assets/logout.png'
import setting from '../../../assets/setting.png'
import './firstPart.css'

const firstPart = () => {
  return (
    <>
                <div className='firstPart__aside'>
                    <div className='firstPart__imageUser'>
                        <img src={User} alt='User' />
                        <div>User</div>
                    </div>
                    <div className='firstPart__imageSetting'>
                        <img src={logout} alt='User' />
                        <div>Setting</div>
                    </div>
                    <div className='firstPart__imageLogOut'>
                        <img src={setting} alt='User' />
                        <div>Log out</div>
                    </div>
        </div>

    </>
  )
}

export default firstPart
