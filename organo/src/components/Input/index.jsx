import { useState } from "react";
import "./Input.css";

function Input(props) {
  const updateInputValue = (e) => {
    props.updateValue(e.target.value);
  };

  return (
    <>
      <div className="input-container">
        <label className="d-block mb-2" htmlFor={props.label}>
          {props.label}
        </label>
        <input
          className="w-100"
          id={props.label}
          onChange={updateInputValue}
          placeholder={props.placeholder}
          required={props.required}
          type="text"
          value={props.value}
        />
      </div>
    </>
  );
}
export default Input;
