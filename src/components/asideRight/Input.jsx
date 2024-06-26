import './Input.css';

export default function Input(props) {


    return <>
        <div className='InputBox'> <input
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            onChange={(e) => props.onChange(e.target.value)}
            value={props.value}
            className="SignUpInput"
            required

        />
        </div>

    </>
}