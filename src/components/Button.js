import React from 'react'
import styled from 'styled-components'

export const Button=(props)=>{
 
  return(
     
    <ButtonApplication type={props.type} onClick={props.function}>{props.message}</ButtonApplication>
   
  )
}

const ButtonApplication=styled.button`
background-color:black;
height:70px;
margin:1rem 0;
color:white;
padding:0.5rem;
font-family: 'Audiowide', cursive;
border-radius:30px;   
font-size: 1.1rem;

&:hover{
  cursor:pointer;
  background-color: rgba(10,0,70,0.5);
}

`