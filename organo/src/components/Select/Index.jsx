import "./Select.css";

function Select(props) {
  const updateSelectValue = (e) => props.updateValue(e.target.value);
  return (
    <>
      <div className="select-container w-100">
        <label className="d-block mb-2">{props.label}</label>
        <select
          className="select w-100"
          onChange={updateSelectValue}
          required={props.required}
          value={props.value}
        >
          {props.teams.map((team) => (
            <option key={team}>{team}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Select;
