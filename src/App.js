import React from 'react'
import Router from './router/Router'
import styled from 'styled-components'
import spaceship from './img/spaceship-3827533_1920.jpg'
// import { BrowserRouter} from "react-router-dom"
// import Header from './components/Header'
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
    // <BrowserRouter>
    <AppContainer>
     
       <Router/>
    </AppContainer>
    // </BrowserRouter>    
  );
}

export default App;
