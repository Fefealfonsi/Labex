import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import {planets} from '../img/planets'


export const Card = (props) => {
 

  

    
  return (
    < CardContainer>
      <PlanetImage src={planets(props.planet)}  alt={props.name}/>
      <div>
      <h4>{props.name}</h4>
      <p >{props.description}</p>
      <p>planeta: {props.planet}</p>
      {props.durationInDays && <p>duração: {props.durationInDays}</p>}
      {props.date && <p>Data: {props.date}</p>}
      </div>

      <Button function={props.function} message={props.message}/>
      
    </ CardContainer>
  )
}


export const CardContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

width:200px;
height:450px;
margin:1rem;
border:solid 1px;
padding:1rem;
background-color: rgba(0,0,0,0.5);
p,h4{
 color:white;
}
`
export const PlanetImage = styled.img`
width:100%;
height:45%;
`




