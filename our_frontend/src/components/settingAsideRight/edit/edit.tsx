import Discuss from '../../messageLeft/discuss/discuss'
import user from '../../../assets/User1.jpg'
import Label from '../../asideRight/Label'
import  Input  from '../../asideRight/Input'
import { useState } from 'react';
import './edit.css'

const edit = () => {
  
  const [UserName, setUserName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  
  const title: string = 'Helena Hills',
        description: string = 'Change photo profile'


  return (
    <>
        <form className='edit__container'>
            <h1>Edit Profile</h1>
            <div className='edit__photo'>
              <Discuss road={user} title={title} description={description}/>
            </div>
            <div className='input1'>
              <Label idValue="UserName" text="Nom d'utilisateur" />
              <Input type="text" id="UserName" placeholder="Nom d'utilisateur" value={UserName} onChange={setUserName} />
            </div>

            <div className='input2'>
              <Label idValue="Email" text="Adresse mail" />
              <Input type="text" id="Email" placeholder="example@gmail.com" value={Email} onChange={setEmail} />
            </div>
            <div className='boutton'>
              <button type='submit'>save changes</button>
            </div>
        </form>
    </>
  )
}

export default edit
