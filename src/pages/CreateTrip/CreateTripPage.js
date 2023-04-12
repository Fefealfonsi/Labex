import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from "../../hooks/useProtectPage";
import axios from "axios";
import {ContainerForm, Form, Select} from "./styled"
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { goToAdminList } from '../../router/coordinator';
import { useNavigate } from 'react-router-dom';


function CreateTripPage() {

  useProtectedPage();
  const navigate = useNavigate()

  const { form, onChange, clearForm } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" });

 

  const onSubmitForm = (event) => {
    event.preventDefault();
    submitCreateTripForm()

  };
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = dia + '/' + mes + '/' + ano;
  

  const submitCreateTripForm = () => {
    const axiosConfig = {
      headers: { auth: localStorage.getItem("token") }
    }

    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips`, form, axiosConfig)
      .then((response) => {
        alert("Viagem Criada com suceso!")
        clearForm()
        goToAdminList(navigate)      
      })
      .catch(err => {
        alert('Ops, algo deu errado, verifique os campos')
        console.log(err.message)
      })
  }

  return (
    
     
      <ContainerForm>
        <h1>Criar Viagem </h1>
        <Form onSubmit={onSubmitForm}>
          <Input
            value={form.name}
            placeholder={"Nome da Viagem"}
            onChange={onChange}
            name={"name"}
            type={"text"}
            pattern={"(.*[a-z]){5}"}
            title={"Nome com pelo menos 5 caracteres"}
            
          />
          <Select placeholder={"Planeta"}
            onChange={onChange}
            value={form.planet}
            name={"planet"}
            type={"text"}
            required>
            <option value="">Escolha um Planeta</option>
            <option key="Mercúrio" value="Mercúrio">Mercúrio</option>
            <option key="Vênus" value="Vênus">Vênus</option>
            <option key="Terra" value="Terra">Terra</option>
            <option key="Marte" value="Marte">Marte</option>
            <option key="Júpter" value="Júpter">Júpter</option>
            <option key="Saturno" value="Saturno">Saturno</option>
            <option key="Urano" value="Urano">Urano</option>
            <option key="Netuno" value="Netuno">Netuno</option>
            <option key="Plutão" value="Plutão">Plutão</option>
          </Select>

          <Input
            value={form.durationInDays}
            placeholder={"Duração em Dias"}
            onChange={onChange}
            name={"durationInDays"}
            type={"number"}
            min="51"
           
          />
          <Input
            value={form.date}
            placeholder={"Data"}
            onChange={onChange}
            name={"date"}
            type={"date"}
            min={dataAtual}
           
          />

          <Input
            value={form.description}
            placeholder={"Descrição da Viagem"}
            onChange={onChange}
            name={"description"}
            type={"text"}
            pattern={".{30,}"}
            title={"A descrição deve ter no mínimo 30 caracteres"}
          />
           <Button type={'submit'} message={"Criar Viajem"}/>
        </Form>


      </ContainerForm>
  
  );
}

export default CreateTripPage;
