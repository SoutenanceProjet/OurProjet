import  Label  from './Label'
import  Input  from './Input'
import  Button  from './Button'
import { useState } from 'react';
import './asideRightIn.css'
import { Link } from 'react-router-dom';
import { FormEvent } from 'react';

type UserConnexion = {
  email: string;
  password: string;
};

const blankField : UserConnexion = {
    email: '',
    password: ''
}

const asideRightIn = () => {

    const [Email, setEmail] = useState<string>('');
    const [Password, setPassword] = useState<string>('');
    const [userConnexion, setUserConnexion] = useState<UserConnexion>(blankField);


    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        setUserConnexion({email: Email, password: Password})

        const response = await fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userConnexion)
        })

        if(response.ok){
            const data = await response.json();
            setEmail('')
            setPassword('')
            setUserConnexion(blankField)
            console.log(data)
        }else{
            console.log("error when you trying to connect")
        }
    }

  return (
    <>
        <div className="asideRight">
            <h1 className="centering color">Se connecter</h1>
            <form className="asideRightContainer" onSubmit={handleSubmit}>
                <Label idValue="Email" text="Adresse mail" />
                <Input type="text" id="Email" placeholder="example@gmail.com" value={Email} onChange={setEmail} />

                <Label idValue="Password" text="Mot de passe" />
                <Input type="password" id="Password" placeholder="Mot de passe" value={Password} onChange={setPassword} />

                <div className="forgottenPassword"><Link to='/forgetPassword'>Mot de passe oublié ?</Link></div>

                <Button text="Connexion"  />

            </form>
        </div>
    </>
  )
}

export default asideRightIn

