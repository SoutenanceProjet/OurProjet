import React from 'react'
import Discuss from '../../messageLeft/discuss/discuss'
import user from '../../../assets/User1.jpg'
import Label from '../../asideRight/Label'
import  Input  from '../../asideRight/Input'
import Button from '../../asideRight/Button'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './edit.css'

const edit = () => {
  
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  
  const title = 'Helena Hills',
        text = 'Save changes',
        description = 'Change photo profile'


  return (
    <>
        <form className='edit__container'>
            <h1>Edit Profile</h1>
            <div className='edit__photo'>
              <Discuss road={user} title={title} description={description} class='newHeight'/>
            </div>
            <div className='input1'>
              <Label htmlFor="UserName" text="Nom d'utilisateur" />
              <Input type="text" id="UserName" placeholder="Nom d'utilisateur" value={UserName} onChange={setUserName} />
            </div>

            <div className='input2'>
              <Label htmlFor="Email" text="Adresse mail" />
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
