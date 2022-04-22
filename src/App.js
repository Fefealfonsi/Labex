import React from 'react'
import Router from './router/Router'
import styled from 'styled-components'
import spaceship from './img/spaceship-3827533_1920.jpg'
import "./App.css"

const AppContainer=styled.div`
bottom: 0px;
margin:0px;
max-width:100vw;
min-height:100%;
background-image: url(${spaceship});
background-repeat: no-repeat;
background-size:cover;

`



function App() {
  return (
    <AppContainer>
       <Router/>
    </AppContainer>
       
  );
}

export default App;
