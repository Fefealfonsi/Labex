import React from 'react'
import HomePage from '../components/HomePage'
import ApplicationFormPage from '../components/ApplicationFormPage'
import ListTripsPage from '../components/ListTripsPage'
import CreateTripPage from '../components/CreateTripPage'
import TripDetailsPage from '../components/TripDetailsPage'
import LoginPage from '../components/LoginPage'
import AdmListPage from '../components/AdmListPage'
// import Header from '../components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom"

function Router() {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path="/">
        <HomePage/>
      </Route>

      <Route exact path="/applicationForm/:id">
        <ApplicationFormPage/>
      </Route>

      <Route exact path="/listTrips">
        <ListTripsPage/>
      </Route>

      <Route  exact path="/login">
       <LoginPage/>
      </Route>

      <Route exact path="/admList">
        <AdmListPage/>
      </Route>

      <Route exact path="/tripDetails/:id">
        <TripDetailsPage/>
      </Route>

      <Route exact path="/createTrip">
        <CreateTripPage/>
      </Route>

    </Switch >
  </BrowserRouter>
  

  );
}

export default Router;
