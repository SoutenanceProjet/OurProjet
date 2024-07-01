import React from 'react'
import { useState } from 'react';
import  Input  from '../../components/asideRight/Input.jsx';
import  Label  from '../../components/asideRight/Label.jsx';
import  Button  from '../../components/asideRight/Button.jsx';
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlinePhotoCamera } from "react-icons/md";
import './asideRightUp.css'

const AsideRightUp = () => {

    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleClick = () => {
        document.getElementById("image").click();
    }
            
    const handleFileChange = (event) => {
        const file = event.target.files[0];

            if (file) {
                setSelectedFile(file);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                };

                reader.readAsDataURL(file);
            }
    }

    console.log(preview)

  return (
    <>
            <div className="container1">
                    <h1 className="centering color">Créer un compte</h1>
                    <div className="centering" >
                        <span onClick={handleClick}>
                        { preview ? <img src = {preview} alt ="Photo de profil"  className="UserImage"/> : ( <span><FaCircleUser className="icon color" /> 
                            <MdOutlinePhotoCamera className="camera" /></span>)
                        }
                        </span>
                        <input type="file" id="image" onChange={handleFileChange} />
                    </div>
                { (!preview) && <div className="centering"><h4>Choisir une photo</h4></div>}

                    <div className="signUp__form">
                        <Label htmlFor="UserName" text="Nom d'utilisateur" />
                        <Input type="text" id="UserName" placeholder="Nom d'utilisateur" value={UserName} onChange={setUserName} />

                        <Label htmlFor="Email" text="Adresse mail" />
                        <Input type="text" id="Email" placeholder="example@gmail.com" value={Email} onChange={setEmail} />

                        <Label htmlFor="Password" text="Mot de passe" />
                        <Input type="password" id="Password" placeholder="Mot de passe" value={Password} onChange={setPassword} />

                        <Label htmlFor="ConfirmPassword" text="Confirmer mot de passe" />
                        <Input type="password" id="ConfirmPassword" placeholder="Confirme le mot de passe" value={ConfirmPassword} onChange={setConfirmPassword} />

                        <Button text="Créer" />
                    </div>
                </div>
    </>
  )
}

export default AsideRightUp
