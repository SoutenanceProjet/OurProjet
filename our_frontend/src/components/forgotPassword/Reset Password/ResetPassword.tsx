import React, { useState } from 'react'
import Label from '../../asideRight/Label'
import Input from '../../asideRight/Input'
import Button from '../../asideRight/Button'
import './resetPassword.css'

const ResetPassword = () => {

    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

  return (
    <>
      <div className='resetPassword__container'>
            <h1 className='resetPassword__title'>New Password</h1>
            <div className='resetPassword__content'>
                <div className='resetPassword__field'>
                <Label idValue="newpassword" text="New Password" />
                <Input type="text" id="newpassword" placeholder="Write stronger password" value={password} onChange={setPassword} />
                <Label idValue="confirmPassword" text="Confirm password" />
                <Input type="text" id="confirmPassword" placeholder="confirm Password" value={confirmPassword} onChange={setConfirmPassword} />
                </div>
                <Button text='Confirm' />
            </div>
        </div>
    </>
  )
}

export default ResetPassword
