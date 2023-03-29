import React from 'react'
import styled from 'styled-components'
import { useNavigate} from 'react-router-dom'
import { Button } from './Button'

import { goToHome, goToCreateList, goToListTrips, goToLogin, goToAdminList } from '../router/coordinator'


const Header = () => {

  const navigate = useNavigate()

  const token = localStorage.getItem("token")
   const path = window.location.pathname
   

  const logout = () => {
    window.localStorage.clear();
    goToHome(navigate)
  };

  return (
    < HeaderContainer>
      <p>LabeX</p>
      <Button
        function={() => goToHome(navigate)}
        message={"Home"}
      />

      {token ?  (path !== "/admList"? <Button
        function={() => goToAdminList(navigate)}
        message={"Voltar para lista"}
      />: <Button
      function={() => goToCreateList(navigate)}
      message={"Criar Viagens"}
    />)
        : <Button
        function={() => goToListTrips(navigate)}
        message={"Viaje com a gente"}
      />}

      {token ? <Button
        function={logout}
        message={"Fazer Logout"}
      />
        : <Button
        function={() => goToLogin(navigate)}
        message={"Login Adm."}
      />}
    </ HeaderContainer>
  );
}

export default Header

const HeaderContainer = styled.div`
display:flex;
justify-content: space-around;

p{
  color:white;
  font-size: 5rem;
  font-family: 'Audiowide', cursive;

}
`
