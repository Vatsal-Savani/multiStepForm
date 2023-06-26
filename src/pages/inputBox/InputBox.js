import React, { useState } from "react";
import "./inputbox.css";

const InputBox = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handelFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <div className="formInput">
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handelFocus}
          required
          focused={focused.toString()}
        />
        <span className="errMsg">{errorMessage}</span>
      </div>
    </>
  );
};

export default InputBox;
