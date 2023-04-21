import './App.css';
import { Header } from './components/header/Header';
import { HomePage } from './components/pageContent/HomePage';
import { CareerPage } from './components/pageContent/CareerPage';
import { JobDesPage } from './components/pageContent/JobDesPage';
import { FormPage } from './components/pageContent/FormPage';
import { Footer } from './components/footer/Footer';
import { TablePage } from './components/pageContent/TablePage';
import { LoginPage } from './components/pageContent/LoginPage';
import { UserProfilePage } from './components/pageContent/UserProfilePage';
import { PreApplyPage } from './components/pageContent/PreApplyPage';
import { ApplySuccessPage } from './components/pageContent/ApplySuccessPage';

import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [title, setTitle] = useState("full-time");
  const [document, setDocument] = useState("doc");
  const [uid, setUid] = useState("doc");
  const [title2, setTitle2] = useState("title2");
  console.log(title);
  console.log(document);
  console.log(uid);
  console.log(title2);
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage setTitle = {setTitle}/>}/>
          <Route path='/career' exact element={<CareerPage />} />
          <Route path='/jobdes' exact element={<JobDesPage setTitle2 = {setTitle2} title={title}/>} />
          <Route path='/form' exact element={<FormPage title={title} setDocument = {setDocument} uid = {uid}/>} />
          <Route path='/table' exact element={<TablePage />} />
          <Route path='/login' exact element={<LoginPage setUid = {setUid}/>} />
          <Route path='/user' exact element={<UserProfilePage uid = {uid}/>} />
          <Route path='/pre' exact element={<PreApplyPage setUid = {setUid} />} />
          <Route path='/apply' exact element={<ApplySuccessPage document = {document}/>} />
        </Routes>
        <Footer/>
    </Router>

    </>
  );
}

export default App;
