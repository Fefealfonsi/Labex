import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Header from '../../components/Header'
import {ContainerForm,Input,ButtonForm } from "./styled"


function LoginPage() {
  const [admEmail, setAdmEmail] = useState("");
  const [admPassword, setAdmPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/admList");
    }
    
  }, [history]);

  const handleEmail = (event) => {
    setAdmEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setAdmPassword(event.target.value);
  };

  const login = () => {
    const body = {
      email: admEmail,
      password: admPassword
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/admList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header/>
      <ContainerForm>
        <h1>Login</h1>
        <Input value={admEmail} onChange={handleEmail} type="email" placeholder="E-mail"/>
        <Input value={admPassword} onChange={handlePassword} type="password" placeholder="Senha"/>
        <ButtonForm onClick={login}>Fazer login</ButtonForm>
        </ContainerForm>
    </div>
    
  );
}

  

export default LoginPage;
