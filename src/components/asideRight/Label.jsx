import './Label.css';

export default function Label(props){


    return <>
      <label htmlFor = {props.idValue}  className='SignUpLabel'>{props.text}</label>
    
    </>
}