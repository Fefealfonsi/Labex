import React from 'react'
import { useRequestData } from "../../hooks/useRequestData";
import {ContainerList} from './styled'
import { Card } from '../../components/Card';
import {goToApplication} from '../../router/coordinator'
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';

function ListTripsPage() {

  const navigate = useNavigate()

  const [getSpaceTrip,isLoading]=useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips", undefined
    
  );

  
    const list= getSpaceTrip && getSpaceTrip.trips.map((trip,i) =>{
      return (< Card 
        key={trip.id}
        image={`https://picsum.photos/200/200?a=${i}`}
        name={trip.name}
        description={trip.description}
        planet={trip.planet}
        duration={trip.duration}
        date={trip.date}
        id={trip.id}
        function ={()=>goToApplication(trip.id, navigate)}
        message={'Quero ir'}
      />
      
      );
    })

    return(
      <div>
        <ContainerList>
          {isLoading?<Loader/>:list}
        </ContainerList>
      </div>
    
    );
  
}

export default ListTripsPage;
