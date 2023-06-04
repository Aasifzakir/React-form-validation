import React, { useState } from 'react'
import './formInput.css'

function FormInput(props) {

  const {  required, handleChange, errorMsg, label, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div className='formInput'>
      <label>{label}<span className='star'>{required ? '*' : ''}</span></label>
      <input 
        {...inputProps}
        onChange={handleChange}
        required={required}
        onBlur={handleFocus}
        onFocus={()=>{
          inputProps.name === 'confirmPassword' && setFocused(true)
        }}
        focused={focused.toString()}
      />
      <span className='err'>{errorMsg}</span>
    </div>
  )
}

export default FormInput
