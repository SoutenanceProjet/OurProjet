import './Input.css';

interface InputProp {
  type: string;
  placeholder: string;
  value: string;
  id: string;
  onChange: (value: string) => void;
}

export default function Input(props: InputProp): JSX.Element {
  return (
    <div className="InputBox">
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={(e) => props.onChange && props.onChange(e.target.value)}
        value={props.value}
        className="SignUpInput"
        required
      />
    </div>
  );
}