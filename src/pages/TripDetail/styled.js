import styled from 'styled-components'

export const DetailContainer = styled.div`
 display:flex;
 justify-content:space-around;
 min-height:100vh;
 `
 export const Card = styled.div`
 width:500px;
 border:solid 2px;
 padding:1em;
 margin-top:1em;
 background-color: rgba(10,23,55,0.5);
 p,h4,h2{
   color:white;
 }
 `
 export const Detail= styled.div`
   display:flex;
   justify-content:space-around;
    margin:1em;
 `
 export const Photo = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    margin-right:1em;
  `
  export const ButtonAcept = styled.button`
    width:50px;
    padding:0.5em;
    background-color:black;
    color:white;
    margin: 10px 10px;
    border-radius:30px;  
    &:hover{
 
      background-color: rgba(10,0,70,0.5);
    
    } 
  `