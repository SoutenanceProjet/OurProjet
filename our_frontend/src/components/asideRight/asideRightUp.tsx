import { useState } from 'react';
import Input from '../../components/asideRight/Input.tsx';
import Label from '../../components/asideRight/Label.tsx';
import Button from '../../components/asideRight/Button.tsx';
import SexeDropdown from '../../components/asideRight/SexeDropdown.tsx';

import { FaCircleUser } from "react-icons/fa6";
import { MdOutlinePhotoCamera } from "react-icons/md";
import './asideRightUp.css'

type UserForm = {
    userName: string,
    UserProfession: string,
    UserNationality: string,
    Email: string,
    Password: string,
    ConfirmPassword: string,
    preview: any
}

const AsideRightUp = () => {

    const [userForm, setUserForm] = useState<UserForm>()
    const [UserName, setUserName] = useState<string>('');
    const [UserProfession, setUserProfession] = useState<string>('');
    const [UserNationality, setUserNationality] = useState<string>('');
    const [Email, setEmail] = useState<string>('');
    const [Password, setPassword] = useState<string>('');
    const [ConfirmPassword, setConfirmPassword] = useState<string>('');
    const [preview, setPreview] = useState(null);

    const handleClick = () => {

        const valable = document.getElementById("image");

        if(valable){
            valable.click();
        }
    }

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];

        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <div className="container1">
                <h1 className="centering color">Créer un compte</h1>
                <div className="centering" >
                    <span onClick={handleClick}>
                        {preview ? <img src={preview} alt="Photo de profil" className="UserImage" /> : (<span><FaCircleUser className="icon color" />
                            <MdOutlinePhotoCamera className="camera" /></span>)
                        }
                    </span>
                    <input type="file" id="image" onChange={handleFileChange} />
                </div>
                {(!preview) && <div className="centering"><h4>Choisir une photo</h4></div>}

                <div className="signUp__form">
                    <Label idValue="UserName" text="Nom d'utilisateur" />
                    <Input type="text" id="UserName" placeholder="Nom d'utilisateur" value={UserName} onChange={setUserName} />

                    <Label idValue="UserSexe" text="Sexe" />
                    <SexeDropdown />

                    <Label idValue="Profession" text="Profession" />
                    <Input type="text" id="Profession" placeholder="Profession" value={UserProfession} onChange={setUserProfession} />

                    <Label idValue="Nationality" text="Nationalité" />
                    <Input type="text" id="Nationality" placeholder="Nationalité" value={UserNationality} onChange={setUserNationality} />


                    <Label idValue="Email" text="Adresse mail" />
                    <Input type="text" id="Email" placeholder="example@gmail.com" value={Email} onChange={setEmail} />

                    <Label idValue="Password" text="Mot de passe" />
                    <Input type="password" id="Password" placeholder="Mot de passe" value={Password} onChange={setPassword} />

                    <Label idValue="ConfirmPassword" text="Confirmer mot de passe" />
                    <Input type="password" id="ConfirmPassword" placeholder="Confirme le mot de passe" value={ConfirmPassword} onChange={setConfirmPassword} />

                </div>
                    <Button text="Créer"/>
            </div>
        </>
    )
}

export default AsideRightUp
