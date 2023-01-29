import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Questionaire } from './components/Questionaire';
import { JobBoard } from './components/JobBoard';

import './App.css';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Questionaire" element={<Questionaire/>}/>
        <Route path="/JobBoard" element={<JobBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
