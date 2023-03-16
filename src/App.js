import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Investigator from './components/Investigator';
import Main from './components/Main';
import Registration from './components/Registration';
import SignUp from './components/SignUp';
import Investigators from './components/investigators/Investigators';
import InvestigatorForm from './components/InvestigatorForm';
import ReserveForm from './components/ReserveForm';
import DeleteInvestigator from './components/DeleteInvestigator';
import Reservations from './components/Reservations';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/investigators" element={<Investigators />} />
        <Route path="/investigators/:id" element={<Investigator />} />
        <Route path="/add_investigator" element={<InvestigatorForm />} />
        <Route path="/investigators/:id/reserve" element={<ReserveForm />} />
        <Route path="remove_investigator" element={<DeleteInvestigator />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
