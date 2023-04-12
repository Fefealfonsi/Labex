import React from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import axios from "axios";
import {Countries} from "../../components/Countries"
import {ContainerForm,Form,Select, ButtonForm}from "./styled"

import { goToListTrips } from '../../router/coordinator';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

function ApplicationFormPage() {
  const { id } = useParams()
  const { form, onChange, clearForm} = useForm({ name: "", age: "", applicationText:"",profession: "",country:"" });
 const navigate = useNavigate()
   
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      submitForm()
      
    };

  const submitForm = () => {
    
    axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips/${id}/apply`,form)
        .then((response) => {
         alert("Obrigada por se inscrver, estamos na torcida!")
         clearForm()
         goToListTrips(navigate)
        
        })
        .catch(err => {
            alert(err.message)
        })
    }
  
    
  
    return (
      <div>
        
        <ContainerForm>
        <h1>Formulário de Inscrição</h1>
        <Form onSubmit={onSubmitForm}>
          <Input
            value={form.name}
            placeholder={"Nome"}
            onChange={onChange}
            name={"name"}
            type={"text"}
            pattern={"(.*[a-z]){3,}"}
            title= "O nome deve ter ao menos 3 letras"
          
          />
          
          <Input
            value={form.age}
            placeholder={"Idade"}
            onChange={onChange}
            name={"age"}
            type={"number"}
            min="18"
            title= "Você deve ter pelo menos 18 anos para se inscrever"
           
          />
          <Input
            value={form.profession}
            placeholder={"Profissão"}
            onChange={onChange}
            name={"profession"}
            type={"text"}
            pattern={"(.*[a-z]){10,}"}
            title= "A profissão deve ter ao menos 10 caracteres"
            
          />
          <Select placeholder={"País"} 
            onChange={onChange} 
            value={form.country}
            name={"country"}
            type={"text"}
            >
            <Countries/>
          </Select>
          
           <Input
            value={form.applicationText}
            placeholder={"Por que quer se candidatar?"}
            onChange={onChange}
            name={"applicationText"}
            type={"text"}
            pattern={".{30,}"}
            title= "O texto da candidatura deve ter ao menos 30 caracteres"
         
          />
          <Button type={"submit"} message={"Enviar inscrição"}/>
        </Form>
        
        </ContainerForm>
      </div>
      
    
  
  
  
    
  );
}

export default ApplicationFormPage;
