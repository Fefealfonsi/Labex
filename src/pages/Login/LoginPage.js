import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {ContainerForm,Form } from "./styled"
import { Input } from "../../components/Input";
import { useForm } from "../../hooks/useForm";
import { Button } from "../../components/Button";



function LoginPage() {
 
  const {form, onChange, clearForm}=useForm({email:"", password:""})
  console.log(form);
  const navigate = useNavigate();

  

  const submitForm=(event)=>{
    event.preventDefault();
    login()
   }
  const login = () => {
   
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/login",form
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clearForm()
        navigate("/admList");
      })
      .catch((err) => {
        alert(`Confira seu e-mail e senha erro ${err}`);
      });
  };
   

  return (
    <div>
      
      <ContainerForm>
        <h1>Login</h1>
        <Form onSubmit={submitForm}>

        <Input
        value={form.email}
        name={"email"} 
        onChange={onChange} 
        type={"email"}
        pattern={"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"}
        title="seu email não está num formato válido"
        placeholder={"e-mail"}
        />

        <Input 
        value={form.password} 
        name={"password"}
        onChange={onChange} 
        type={"password"}
        placeholder={"Senha"}
        pattern={".{6,}"}
        title="Sua senha deve ter no mínimo 6 caracteres"
        />
        
        <Button type={'submit'} message={"Fazer login"}/>
        </Form>
        </ContainerForm>
    </div>
    
  );
}

  

export default LoginPage;
