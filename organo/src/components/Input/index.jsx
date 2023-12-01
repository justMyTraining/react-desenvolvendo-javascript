import "./Input.css";

function Input(props) {
  return (
    <>
      <div className="input-container">
        <label className="d-block mb-2" htmlFor={props.label}>
          {props.label}
        </label>
        <input
          id={props.label}
          className="w-100"
          type="text"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
}
export default Input;
