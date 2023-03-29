import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../../hooks/useProtectPage";
import { DetailContainer, Card, Detail, Photo, ButtonAcept, DeleteTrip } from "./styled"
import { useParams, useNavigate } from 'react-router-dom'
import { goToAdminList } from "../../router/coordinator";


function TripDetailsPage() {

  useProtectedPage();
  const { id } = useParams()
  const [trips, setTrips] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);

  const navigate = useNavigate()

  const deleteTrip =(id)=>{

    const axiosConfig = {
      headers: { auth: localStorage.getItem("token") }
    }
    axios.delete( `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips/${id}`, axiosConfig)
    .then((res)=>{
      alert("Viagem deletada")
      goToAdminList(navigate)
     
    })
    .catch((err)=>{
      alert(err);
    })
  }

  const getTripDetail = () => {
    const axiosConfig = {
      headers: { auth: localStorage.getItem("token") }
    }
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trip/${id}`, axiosConfig)

      .then((res) => {
        setTrips(res.data.trip);
        setCandidates(res.data.trip.candidates)
        setApproved(res.data.trip.approved)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTripDetail()
  }, [id])

  const aceptCandidate = (candidateId, approve) => {
    const axiosConfig = {
      headers: { auth: localStorage.getItem("token") }
    }
    const body = {
      approve: approve
    }
    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips/${id}/candidates/${candidateId}/decide`, body, axiosConfig)
      .then((response) => {

        if (approve) {
          alert("Candidato provado")
        } else {
          alert("Candidato não provado")
        }
        getTripDetail()

      })
      .catch(e => {
        console.log(e)
      })
  }


  const candidatos = candidates.map((candidate, i) => {
    return (
      <div key={candidate.id}>
        <Detail>
          <Photo src={`https://picsum.photos/200/200?a=${i}]`} />
          <p key={candidate.id}>Olá meu nome é {candidate.name}, tenho {candidate.age} anos, meu país é {candidate.country} e sou {candidate.profession}</p>
        </Detail>
        <p>{candidate.applicationText}</p>
        <ButtonAcept onClick={() => { aceptCandidate(candidate.id, true) }}>Yes</ButtonAcept>
        <ButtonAcept onClick={() => { aceptCandidate(candidate.id, false) }}>No</ButtonAcept>
      </div>
    );
  })

  const aprovados = approved.map((candidate, i) => {
    return (

      <Detail key={candidate.id}>
        <hr />
        <Photo src={`https://picsum.photos/200/200?a=${i}]`} />
        <div>
          <p><strong>Nome: </strong>{candidate.name}</p>
          <p><strong>Idade: </strong>{candidate.age}</p>
          <p><strong>País: </strong>{candidate.country}</p>
          <p><strong>Profissão: </strong>{candidate.profession}</p>
        </div>
        <hr />
      </Detail>


    );
  })

  return (
    <div>

      <DetailContainer>
        <Card>
          <h2>Detalhes da Viagen</h2>
          <p>Atividade: {trips.name}</p>
          <p>Lugar: {trips.planet}</p>
          <p>Data: {trips.date}</p>
          <p>Duração:{trips.durationInDays}</p>
          <p>Descrição: {trips.description}</p>
          <DeleteTrip onClick={()=>deleteTrip(id)}>Apagar Viagem</DeleteTrip>
          <br />
          <hr />
          <br />
          <h2>Candidatos aprovados</h2>
          {aprovados}
        </Card>

        <Card>
          <h2>Controle de viajantes</h2>
          <h4>Atividade: {trips.name}</h4>
          {candidatos}


        </Card>
      </DetailContainer>
    </div>



  );
}


export default TripDetailsPage;
