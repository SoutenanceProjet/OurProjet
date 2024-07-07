import Discuss from '../../messageLeft/discuss/discuss'
import user from '../../../assets/User1.jpg'
import Label from '../../asideRight/Label'
import  Input  from '../../asideRight/Input'
import { useState } from 'react';
import './edit.css'
import SexeDropdown from '../../asideRight/SexeDropdown';

const edit = () => {
  
  const [UserName, setUserName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [UserProfession, setUserProfession] = useState<string>('');
  const [UserNationality, setUserNationality] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  
  const title: string = 'Helena Hills',
        description: string = 'Click to change your profile picture'


  return (
    <>

        <form className='edit__container'>
            <h1>Edit Profile</h1>
            <form>
              <div className='edit__photo'>
                <Discuss road={user} title={title} description={description}/>
              </div>
              <div className='boutton'>
                <button type='submit'>save changes</button>
              </div>
            </form>

            <form >
                <Label idValue="UserName" text="Nom d'utilisateur" />
                <Input type="text" id="UserName" placeholder="Nom d'utilisateur" value={UserName} onChange={setUserName} />
             <div className='boutton'>
                <button type='submit'>save changes</button>
              </div>
            </form>

            <form >
                <Label idValue="Email" text="Adresse mail" />
                <Input type="text" id="Email" placeholder="example@gmail.com" value={Email} onChange={setEmail} />
              <div className='boutton'>
                <button type='submit'>save changes</button>
              </div>
            </form>

            <form >
              <Label idValue="UserSexe" text="Sexe" />
              <SexeDropdown />
              <div className='boutton'>
                <button type='submit'>save changes</button>
              </div>
            </form>

            <form >
              <Label idValue="Profession" text="Profession" />
              <Input type="text" id="Profession" placeholder="Profession" value={UserProfession} onChange={setUserProfession} />
              <div className='boutton'>
                <button type='submit'>save changes</button>
              </div>
            </form>

            <form >
              <Label idValue="Nationality" text="Nationalité" />
              <Input type="text" id="Nationality" placeholder="Nationalité" value={UserNationality} onChange={setUserNationality} />
              <div className='boutton'>
                <button type='submit'>save changes</button>
              </div>
            </form>

            <form >
              <Label idValue="Password" text="Mot de passe" />
              <Input type="password" id="Password" placeholder="Mot de passe" value={Password} onChange={setPassword} />
              <div className='boutton'>
                <button type='submit'>save changes</button>
              </div>
            </form>

        </form>
    </>
  )
}

export default edit
