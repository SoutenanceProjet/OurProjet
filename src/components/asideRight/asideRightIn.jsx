import React from 'react'
import { Label } from './Label'
import { Input } from './Input'
import { Button } from './Button'
import { useState } from 'react';
import google from '../../assets/google.png'
import './asideRightIn.css'

const asideRightIn = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');


  return (
    <>
        <div className="asideRight">
            <h1 className="centering color">Se connecter</h1>
            <div className="asideRightContainer">
                <Label htmlFor="Email" text="Adresse mail" />
                <Input type="text" id="Email" placeholder="example@gmail.com" value={Email} onChange={setEmail} />

                <Label htmlFor="Password" text="Mot de passe" />
                <Input type="password" id="Password" placeholder="Mot de passe" value={Password} onChange={setPassword} />

                <div className="forgottenPassword"><a href="#ChangePassword">Mot de passe oublié ?</a></div>

                <Button text="Connexion"  />

                <div className="BtnsConnexion">
                    <div>or</div>
                    <div><a href="#"><button className="googleButton" ><img src={google} alt='google' /> use google</button></a></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default asideRightIn
