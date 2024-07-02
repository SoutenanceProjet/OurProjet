import { Link } from 'react-router-dom'
import homeIcon from '../../assets/home.svg'
import editIcon from '../../assets/edit.svg'
import politiqueIcon from '../../assets/politique.svg'
import logoutIcon from '../../assets/logout.svg'
import './settingAsideLeft.css'

const settingAsideLeft = () => {

  const login: string = '/'
  const home: string = '/message'

  return (
    <>
      <div className='settingAsideLeft__container'>
        <div className='settingAdiseLeft__box1'>
          <Link to={home} className='link'>
              <div className='imageContainer'>
                <img src={homeIcon} alt='Home' />
              </div>
            <div>Home</div>
          </Link>
        </div>
        <div className='settingAdiseLeft__box2'>
          <Link to="/setting" className='link'>
              <div className='imageContainer'>
                <img src={editIcon} alt='Edit' />
              </div>
              <div>Edit</div>
          </Link>
        </div>
        <div className='settingAdiseLeft__box4'>
          <Link to="/setting" className='link'>
              <div className='imageContainer'>
               <img src={politiqueIcon} alt='' />
              </div>
              <div>Politique</div>
          </Link>
        </div>
        <div className='settingAdiseLeft__box5'>
          <Link to={login} className='link'>
              <div className='imageContainer'>
                  <img src={logoutIcon} alt='' />
              </div>
              <div>Logout</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default settingAsideLeft
