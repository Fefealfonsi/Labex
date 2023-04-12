import React from 'react'
import styled from 'styled-components'



export const Input = ({ value, placeholder, onChange, name, type, pattern,title, min, minlength}) => {
  
  return (

    <InputForm
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      type={type}
      pattern={pattern}
      title={title}
      min={min}
      minlength={minlength}
      required
    />

  )
}
export const InputForm = styled.input`
padding: 10px;
width: 300px;
margin: 0.5em;
border-radius:20px;
border:none;
`