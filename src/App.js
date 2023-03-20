import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Investigator from './components/investigators/Investigator';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Investigators from './components/investigators/Investigators';
import Layout from './components/Layout';
import Login from './components/Login';
import InvestigatorForm from './components/investigators/InvestigatorForm';
import ReserveForm from './components/ReserveForm';
import DeleteInvestigator from './components/investigators/DeleteInvestigator';
import Appointments from './components/appointments/Appointments';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app/" element={<Layout />}>
        <Route path="investigators" element={<Investigators />} />
        <Route path="investigators/:id" element={<Investigator />} />
        <Route path="add_investigator" element={<InvestigatorForm />} />
        <Route path="investigators/:id/reserve" element={<ReserveForm />} />
        <Route path="delete-investigator/:id" element={<DeleteInvestigator />} />
        <Route path="appointments" element={<Appointments />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
