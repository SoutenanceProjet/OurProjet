import './writeCode.css'
import Label from '../../asideRight/Label'
import Input from '../../asideRight/Input'
import Button from '../../asideRight/Button'
import { useState } from 'react'

const WriteCode = () => {

    const [writeCode, setWriteCode] = useState<string>('')

  return (
    <>
        <div className='writeCode__container'>
            <h1 className='writeCode__title'>Write Authentification Code</h1>
            <div className='writeCode__content'>
                <div className='writeCode__field'>
                <Label idValue="writecode" text="Code" />
                <Input type="text" id="writecode" placeholder="" value={writeCode} onChange={setWriteCode} />
                </div>
                <Button text='validate' />
            </div>
        </div>
    </>
  )
}

export default WriteCode
