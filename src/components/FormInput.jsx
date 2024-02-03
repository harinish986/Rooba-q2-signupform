import React, {useState} from 'react';
import './FormInput.css';

const FormInput = (props) => {

    const [focus, setFocus] = useState(false);

    const handleFocus = (e) => {
        setFocus(true);
    }

    const {label, onChange, id, ...inputProps} = props;

  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focus={focus.toString()} onFocus={() => inputProps.name === "password" && setFocus(true)}/>
        <span>{props.errorMessage}</span>
    </div>
  )
}

export default FormInput