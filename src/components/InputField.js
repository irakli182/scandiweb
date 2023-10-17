import React from 'react';
import "../styles/InputField.css"
import "../styles/InputField.css"

function InputField(props) {

  const { id, className, text, type } = props;

  return (

        <div className="input_div">
        <label htmlFor={id} className="input_label">
            {text}
        </label>
        <input type={type} className="input_field" id={id} />
        </div>
  );
}

export default InputField;