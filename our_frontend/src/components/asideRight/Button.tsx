import './Button.css';

interface ButtonProp{
    text: string;
}

export default function Button({text}: ButtonProp): any {

    return <>
                 <div  className="BtnContainer editBtnContainer"> 
                    <button type = "submit" className="Btn editBtn">{text}</button>
                </div>
    </>
}