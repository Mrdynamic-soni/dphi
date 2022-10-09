import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-bootstrap';
import Homepage from './Components/Homepage';
import Addhackathon from './Components/Addhackathon';
import Details from './Components/Details';

const App=()=>{
  return(
    <>
      <Routes>
        <Route exact path = "/" element={<Homepage/>}/>
        <Route exact path = "/Addhackathon" element={<Addhackathon/>}/>
        <Route exact path = "/Details" element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App;