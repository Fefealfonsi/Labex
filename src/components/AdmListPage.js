import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { useRequestData } from "../hooks/useRequestData";
import { useProtectedPage } from "../hooks/useProtectPage";
import AdmHeader from './AdmHeader';

const ContainerList= styled.div`
   display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width:100vw;
 `
const Card = styled.div`
 width:200px;
 margin:1em;
 border:solid 2px;
 padding:1em;
 background-color: rgba(0,0,0,0.5);
 p,h4{
   color:white;
 }
 
 button{
   width:200px;
   padding:0.5em;
   background-color:gray;
   font-size: 20px;
   bottom:0px;
   margin: 30px 0px;
   
 }
`
function AdmListPage() {

    useProtectedPage();
  
  const getSpaceTrip=useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips", undefined
    
  );
  console.log(getSpaceTrip)

  const history=useHistory()

  const goToDetail=(id)=>{
    history.push(`/tripDetails/${id}`)
  } 

  const goToCreateTrip=(id)=>{
    history.push(`createTrip`)
  } 
    const list= getSpaceTrip && getSpaceTrip.trips.map((trip,i) =>{
      return (< Card>
         <img src={`https://picsum.photos/200/200?a=${i}]`}/>
          <h4 key={trip.id}>{ trip.name}</h4>
          <p>planeta: {trip.planet}</p>
          <button onClick={()=>{goToDetail(trip.id)}}> Ver detalhes</button>
      </ Card>
      );
    })

    return(
    <div>
      <AdmHeader/>
            <ContainerList>
                {list}
            </ContainerList>
            
    </div>
    
    );
  
}

export default AdmListPage;