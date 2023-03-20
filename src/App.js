import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Investigator from './components/Investigator';
import Main from './components/Main';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Investigators from './components/investigators/Investigators';
import Login from './components/Login';
import InvestigatorForm from './components/InvestigatorForm';
import ReserveForm from './components/ReserveForm';
import DeleteInvestigator from './components/DeleteInvestigator';
import Appointments from './components/appointments/Appointments';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/investigators" element={<Investigators />} />
        <Route path="/investigators/:id" element={<Investigator />} />
        <Route path="/add_investigator" element={<InvestigatorForm />} />
        <Route path="/investigators/:id/reserve" element={<ReserveForm />} />
        <Route path="delete-investigator/:id" element={<DeleteInvestigator />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
