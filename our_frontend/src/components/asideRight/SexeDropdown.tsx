import './SexeDropdown.css';

export default function SexeDropdown(props: any): any {


    return <div>

        <select name="sexe" className="sexeDropdown" onChange={(e) => props.onChange(e.target.value)}>
            <option value="Féminin" >Féminin</option>
            <option value="Masculin">Masculin </option>
        </select>
    </div>
}