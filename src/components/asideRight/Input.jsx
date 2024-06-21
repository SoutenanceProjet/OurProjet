import './Input.css';

export function Input(props) {


    return <>
        <div> <input
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