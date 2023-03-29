import React from 'react'
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectPage";
import {ContainerList} from "./styled"
import { Card } from '../../components/Card';
import {goToDetail} from '../../router/coordinator'
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';

function AdmListPage() {

    useProtectedPage();
   const navigate=useNavigate()
  const [getSpaceTrip, isLoading]=useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips", undefined
    
  );

   const list = getSpaceTrip && getSpaceTrip.trips.map((trip,i) =>{
    return (< Card 
      key={trip.id}
      image={`https://picsum.photos/200/200?a=${i}`}
      name={trip.name}
      planet={trip.planet}
      function={()=>goToDetail(trip.id, navigate)}
      id= {trip.id}
      message={'Ver Detalhes'}
      // path={path}
      
    />
      
    );
  })

    return(
            <ContainerList>
                {isLoading? <Loader/>: list}
            </ContainerList>
    );
  
}

export default AdmListPage;