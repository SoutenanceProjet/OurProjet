import { FormEvent, useState } from 'react';
import Input from '../../components/asideRight/Input.tsx';
import Label from '../../components/asideRight/Label.tsx';
import Button from '../../components/asideRight/Button.tsx';
import SexeDropdown from '../../components/asideRight/SexeDropdown.tsx';

import { FaCircleUser } from "react-icons/fa6";
import { MdOutlinePhotoCamera } from "react-icons/md";
import './asideRightUp.css'

type UserForm = {
    firstname: string,
    profession: string,
    nationality: string,
    email: string,
    password: string,
    confirmpassword: string,
    image: string,
    sex : string
}

const blankField: UserForm = {
    firstname: '',
    profession: '',
    nationality: '',
    email: '',
    password: '',
    confirmpassword: '',
    image: '',
    sex : ''
}

const AsideRightUp = () => {

    const [userForm, setUserForm] = useState<UserForm>()
    const [firstname, setfirstname] = useState<string>('');
    const [profession, setprofession] = useState<string>('');
    const [nationality, setnationality] = useState<string>('');
    const [email, setemail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [confirmpassword, setconfirmpassword] = useState<string>('');
    const [preview, setPreview] = useState('');
    const [sex, setsex] = useState<string>('');

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

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        setUserForm({
            firstname: firstname,
            profession: profession,
            nationality: nationality,
            email: email,
            password: password,
            confirmpassword: confirmpassword,
            image: preview,
            sex : sex
            })
            
            alert(userForm)

           const response = await fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userForm)
        })

        if(response.ok){
            const data = await response.json();
            setfirstname(blankField.firstname)
            setnationality(blankField.nationality)
            setprofession(blankField.profession)
            setemail(blankField.email)
            setpassword(blankField.password)
            setconfirmpassword(blankField.confirmpassword)
            setPreview(blankField.image)
            setsex(blankField.sex)
            setUserForm(blankField)
            console.log(data)
        }else{
            console.log("error when you trying to connect")
        }
    }

    return (
        <>
            <div className="container1">
                <h1 className="centering color">Créer un compte</h1>
                <div className="centering" >
                    <span onClick={handleClick} className='asideImage'>
                        {preview ? <img src={preview} alt="Photo de profil" className="UserImage" /> : (<span><FaCircleUser className="icon color" />
                            <MdOutlinePhotoCamera className="camera" /></span>)
                        }
                    </span>
                    <input type="file" id="image" onChange={handleFileChange} />
                </div>
                {(!preview) && <div className="centering"><h4>Choisir une photo</h4></div>}

                <form onSubmit={handleSubmit}>
                    <div className="signUp__form">
                        <Label idValue="firstname" text="Nom d'utilisateur" />
                        <Input type="text" id="firstname" placeholder="Nom d'utilisateur" value={firstname} onChange={setfirstname} />

                        <Label idValue="UserSexe" text="Sexe" />
                        <SexeDropdown onChange={setsex}/>

                        <Label idValue="Profession" text="Profession" />
                        <Input type="text" id="Profession" placeholder="Profession" value={profession} onChange={setprofession} />

                        <Label idValue="Nationality" text="Nationalité" />
                        <Input type="text" id="Nationality" placeholder="Nationalité" value={nationality} onChange={setnationality} />


                        <Label idValue="email" text="Adresse mail" />
                        <Input type="text" id="email" placeholder="example@gmail.com" value={email} onChange={setemail} />

                        <Label idValue="password" text="Mot de passe" />
                        <Input type="password" id="password" placeholder="Mot de passe" value={password} onChange={setpassword} />

                        <Label idValue="confirmpassword" text="Confirmer mot de passe" />
                        <Input type="password" id="confirmpassword" placeholder="Confirme le mot de passe" value={confirmpassword} onChange={setconfirmpassword} />

                    </div>
                        <Button text="Créer"/>
                </form>

            </div>
        </>
    )
}

export default AsideRightUp
