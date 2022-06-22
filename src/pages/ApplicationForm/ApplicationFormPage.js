import React from 'react'
import { useParams,useHistory } from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import axios from "axios";
import {Countries} from "../../components/Countries"
import Header from '../../components/Header'
import {ContainerForm,Form,Input, Select, ButtonForm}from "./styled"

function ApplicationFormPage(props) {
  const { id } = useParams()
  const { form, onChange, clearForm} = useForm({ name: "", age: "", profession: "",country:"",applicationText:"" });
 
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
         alert("Obrigada por se inscrver, estamos na torcida!")
         clearForm()
        
        })
        .catch(err => {
            alert(err.message)
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
            title= "O nome deve ter ao menos 3 letras"
            required
          />
          
          <Input
            value={form.age}
            placeholder={"Idade"}
            onChange={handleInputChange}
            name={"age"}
            type={"number"}
            min="18"
            title= "você deve ter pelo menos 18 anos para se inscrever"
            required
          />
          <Input
            value={form.profession}
            placeholder={"Profissão"}
            onChange={handleInputChange}
            name={"profession"}
            type={"text"}
            pattern={"(.*[a-z]){10}"}
            title= "A profissão deve ter ao menos 10 caracteres"
            required
          />
          <Select placeholder={"País"} 
            onChange={handleInputChange} 
            value={form.country}
            name={"country"}
            type={"text"}
            >
            <Countries/>
          </Select>
          
           <Input
            value={form.applicationText}
            placeholder={"Por que quer se candidatar?"}
            onChange={handleInputChange}
            name={"applicationText"}
            type={"text"}
            pattern={"(.*[a-z]){30}"}
            title= "O texto de candidatura deve ter ao menos 30 caracteres"
            required
          />
          <ButtonForm onClick={onSubmitForm}>Inscrever-se</ButtonForm>
        </Form>
        
        </ContainerForm>
      </div>
      
    
  
  
  
    
  );
}

export default ApplicationFormPage;
