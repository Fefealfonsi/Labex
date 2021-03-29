import React from 'react'
import { useParams,useHistory } from 'react-router-dom'
import {useForm} from '../hooks/useForm'
import styled from 'styled-components'
import axios from "axios";
import {Countries} from "./Countries"
import Header from './Header'

const ContainerForm= styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  h1{
    color:white;
    
  }
  height:100vh;
 `
const Form= styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin:2em;

`
const Input= styled.input`
  padding: 10px;
  width: 300px;
  margin: 0.5em;
`

const Select= styled.select`
  padding: 10px;
  width: 320px;
  margin: 0.5em;
  
`
const ButtonForm=styled.button`
background-color: rgba(0,0,0,0.8);
height:70px;
margin-top:1.5em;
color:white;
padding:0.5em;
font-family: 'Audiowide', cursive;
border-radius:30px;   
font-size: 20px;
`
function ApplicationFormPage(props) {


  const history=useHistory()

  const goToHome=()=>{
    history.push('/')
  } 

  const { id } = useParams()
  const { form, onChange } = useForm({ name: "", age: "", profession: "",country:"",applicationText:"" });
 
    const handleInputChange = (event) => {
      const { value, name } = event.target;
  
      onChange(value, name);
    };
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      submitForm()
      
    };


  const submitForm = () => {
    
    axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips/${id}/apply`,form)
        .then((response) => {
         alert("Obrigada por se inscrver, estamos na torcida!", response.data.message)
         console.log("OK", response)
        })
        .catch(e => {
            console.log(e)
        })
    }
  
    
  
    return (
      <div>
        <Header/>
        <ContainerForm>
        <h1>Formulário de Inscrição</h1>
        <Form onSubmit={onSubmitForm}>
          <Input
            value={form.name}
            placeholder={"Nome"}
            onChange={handleInputChange}
            name={"name"}
            type={"text"}
            pattern={"(.*[a-z]){3}"}
            required
          />
          
          <Input
            value={form.age}
            placeholder={"Idade"}
            onChange={handleInputChange}
            name={"age"}
            type={"number"}
            min="18"
            required
          />
          <Input
            value={form.profession}
            placeholder={"Profissão"}
            onChange={handleInputChange}
            name={"profession"}
            type={"text"}
            pattern={"(.*[a-z]){10}"}
            required
          />
          <Select placeholder={"País"} 
            onChange={handleInputChange} 
            value={form.country}
            name={"country"}
            type={"text"}
            required>
            <Countries/>
          </Select>
          
           <Input
            value={form.applicationText}
            placeholder={"Por que quer se candidatar?"}
            onChange={handleInputChange}
            name={"applicationText"}
            type={"text"}
            pattern={"(.*[a-z]){30}"}
            required
          />
          <ButtonForm onClick={onSubmitForm}>Inscrever-se</ButtonForm>
        </Form>
        
        </ContainerForm>
      </div>
      
    
  
  
  
    
  );
}

export default ApplicationFormPage;
