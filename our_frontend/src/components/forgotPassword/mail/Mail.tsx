import './mail.css'
import Label from '../../asideRight/Label'
import Input from '../../asideRight/Input'
import Button from '../../asideRight/Button'
import { useState } from 'react'

const Mail = () => {

    const [sendMail, setSendMail] = useState<string>('')

  return (
    <>
        <div className='mail__container'>
            <h1 className='mail__title'>Choose Your Mail</h1>
            <div className='mail__content'>
                <div className='mail__field'>
                <Label idValue="sendMail" text="Adresse mail" />
                <Input type="text" id="sendMail" placeholder="example@gmail.com" value={sendMail} onChange={setSendMail} />
                </div>
                <Button text='Check' />
            </div>
        </div>
    </>
  )
}

export default Mail
