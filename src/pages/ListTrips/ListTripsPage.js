import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useRequestData } from "../../hooks/useRequestData";
import {ContainerList, Card, ButtonApplication} from './styled'
import Header from '../../components/Header'



function ListTripsPage() {
  
  const getSpaceTrip=useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips", undefined
    
  );

  
  const history=useHistory()

  const goToApplication=(id)=>{
    history.push(`/applicationForm/${id}`)
    
  } 

  
    const list= getSpaceTrip && getSpaceTrip.trips.map((trip,i) =>{
      return (< Card>
         <img src={`https://picsum.photos/200/200?a=${i}]`}/>
          <h4 key={trip.id}>{ trip.name}</h4>
          <p >{ trip.description}</p>
          <p>planeta: {trip.planet}</p>
          <p>duração: {trip.durationInDays}</p>
          <p>Data: {trip.date}</p>
          <ButtonApplication onClick={()=>{goToApplication(trip.id)}}>Quero ir</ButtonApplication>
      </ Card>
      );
    })

    return(
      <div>
        <Header/>
        <ContainerList>
          {list}
        </ContainerList>
      </div>
    
    );
  
}

export default ListTripsPage;
