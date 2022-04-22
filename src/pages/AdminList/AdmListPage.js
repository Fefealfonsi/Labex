import React from 'react'
import { useHistory } from 'react-router-dom';
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectPage";
import AdmHeader from '../../components/AdmHeader';
import {ContainerList, Card, ButtonApplication} from "./styled"

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
          <ButtonApplication onClick={()=>{goToDetail(trip.id)}}> Ver detalhes</ButtonApplication>
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