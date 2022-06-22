import React from 'react'
import HomePage from '../pages/Home/HomePage'
import ApplicationFormPage from '../pages/ApplicationForm/ApplicationFormPage'
import ListTripsPage from '../pages/ListTrips/ListTripsPage'
import CreateTripPage from '../pages/CreateTrip/CreateTripPage'
import TripDetailsPage from '../pages/TripDetail/TripDetailsPage'
import LoginPage from '../pages/Login/LoginPage'
import AdmListPage from '../pages/AdminList/AdmListPage'
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
