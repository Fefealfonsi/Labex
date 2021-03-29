import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderContainer=styled.div`
display:flex;
justify-content: space-around;

p{
  color:white;
  font-size: 100px;
  font-family: 'Audiowide', cursive;

}
`
const ButtonHeader=styled.button`
background-color: black;
height:70px;
margin-top:1.5em;
color:white;
padding:0.5em;
font-family: 'Audiowide', cursive;
border-radius:30px;   
font-size: 20px;
`

const Header=() =>{

  const history = useHistory()


  const goToLogin = () => {
    history.push("/login")
  };



  const goToListTrips = () => {
    history.push("/listTrips")
  };

  const goToHome = () => {
    history.push("/")
  };

  return (
    < HeaderContainer>
      <p>LabeX</p>
        <ButtonHeader onClick={goToHome}> Home </ButtonHeader>
        <ButtonHeader onClick={goToListTrips}> viaje com a gente</ButtonHeader>
        <ButtonHeader onClick={goToLogin}> Fazer Login</ButtonHeader>
    </ HeaderContainer>
  );
}

export default Header;
