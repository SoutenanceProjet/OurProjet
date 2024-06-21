import './Label.css';

export function Label(props){


    return <>
      <label htmlFor = {props.idValue}  className='SignUpLabel'>{props.text}</label>
    
    </>
}