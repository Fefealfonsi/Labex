import styled from 'styled-components'

export const ContainerList= styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
width:100vw;
min-height:100vh;
`

export const Card = styled.div`
width:200px;
margin:1em;
border:solid 2px;
padding:1em;
background-color: rgba(0,0,0,0.5);
p,h4{
  color:white;
}


`
export const ButtonApplication=styled.button`
background-color:black;
height:70px;
width:100%;
margin-top:1.5em;
color:white;
padding:0.5em;
font-family: 'Audiowide', cursive;
border-radius:30px;   
font-size: 20px;

&:hover{
  background-color: rgba(10,0,70,0.5);
}

`
