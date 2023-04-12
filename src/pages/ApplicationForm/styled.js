import styled from 'styled-components'

export const ContainerForm= styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  h1{
    color:white;
        
  }
  height:100vh;
 `
 export const Form= styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin:2em;

`


export const Select= styled.select`
  padding: 10px;
  width: 320px;
  margin: 0.5em;
  border-radius:20px;
  border:none;
  
`
export const ButtonForm=styled.button`
background-color: rgba(0,0,0,0.8);
height:70px;
margin-top:1.5em;
color:white;
padding:0.5em;
font-family: 'Audiowide', cursive;
border-radius:30px;   
font-size: 20px;

&:hover{
  height:75px;
  background-color: rgba(10,0,70,0.5);

}
`