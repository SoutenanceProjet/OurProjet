import './Button.css';

export default function Button(props) {

    return <>
                 <div  className="BtnContainer editBtnContainer"> <button type = "submit" className="Btn editBtn">{props.text}</button></div>
    </>
}