import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from "../../hooks/useProtectPage";
import axios from "axios";
import AdmHeader from '../../components/AdmHeader'
import {ContainerForm, Form, Input, Select, ButtonForm} from "./styled"


function CreateTripPage() {

  const history = useHistory()
  const goToHome = () => {
    history.push('/')
  }
  useProtectedPage();


  const { form, onChange, clearForm } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

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
        console.log("OK", response)
        clearForm()
      })
      .catch(err => {
        console.log(err)
      })
  }



  return (
    <div>
      <AdmHeader />
      <ContainerForm>
        <h1>Criar Viagem </h1>
        <Form onSubmit={onSubmitForm}>
          <Input
            value={form.name}
            placeholder={"Nome da Viagem"}
            onChange={handleInputChange}
            name={"name"}
            type={"text"}
            pattern={"(.*[a-z]){5}"}
            required
          />
          <Select placeholder={"Planeta"}
            onChange={handleInputChange}
            value={form.planet}
            name={"planet"}
            type={"text"}
            required>
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
            onChange={handleInputChange}
            name={"durationInDays"}
            type={"number"}
            min="50"
            required
          />
          <Input
            value={form.date}
            placeholder={"Data"}
            onChange={handleInputChange}
            name={"date"}
            type={"date"}
            min={dataAtual}
            required
          />

          <Input
            value={form.description}
            placeholder={"Descrição da Viagem"}
            onChange={handleInputChange}
            name={"description"}
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

export default CreateTripPage;
