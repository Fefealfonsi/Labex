import React from 'react'
import HomePage from '../pages/Home/HomePage'
import ApplicationFormPage from '../pages/ApplicationForm/ApplicationFormPage'
import ListTripsPage from '../pages/ListTrips/ListTripsPage'
import CreateTripPage from '../pages/CreateTrip/CreateTripPage'
import TripDetailsPage from '../pages/TripDetail/TripDetailsPage'
import LoginPage from '../pages/Login/LoginPage'
import AdmListPage from '../pages/AdminList/AdmListPage'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from '../components/Header'


function Router() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/listTrips' element={<ListTripsPage />} />
        <Route path='/applicationForm/:id' element={<ApplicationFormPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admList' element={<AdmListPage />} />
        <Route path='/tripDetails/:id' element={<TripDetailsPage />} />
        <Route path='/createTrip' element={<CreateTripPage />} />
      </Routes >
    </BrowserRouter>


  );
}

export default Router;
