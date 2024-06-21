import './Button.css';

export function Button(props) {

    return <>
                 <div  className="BtnContainer"> <button type = "submit" className="Btn">{props.text}</button></div>
    </>
}