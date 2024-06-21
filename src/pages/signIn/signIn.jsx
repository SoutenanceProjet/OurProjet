import React from 'react'
import AsideLeft from '../../components/asideLeft/AsideLeft'
import { Input } from '../../components/asideRight/Input.jsx';
import { Label } from '../../components/asideRight/Label.jsx';
import { Button } from '../../components/asideRight/Button.jsx';
import { useState } from 'react';
import './signIn.css'
import google from '../../assets/google.png'

const SignIn = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const title = "Welcome back",
          description = "Discute with you friend and ",
          description1 = "your communauty",
          question = " you have not account ?",
          button = "Create",
          link = "/signUp"

  return (
    <div>
        <div className="main">
                <div className="aside"> 
                    <AsideLeft 
                        title = {title} 
                        description={description} 
                        description1={description1}
                        question={question} 
                        button={button}
                        link = {link}
                    />
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
                </div>
        </div>
    </div>
  )
}

export default SignIn
