import "./Select.css";

function Select(props) {
  return (
    <>
      <div className="select-container w-100">
        <label className="d-block mb-2">{props.label}</label>
        <select className="select w-100">
          {props.options.map(option => <option key={option}>{option}</option>)}
        </select>
      </div>
    </>
  );
}

export default Select;
