import React from 'react';
import './Assets/App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DisplayListEmployee from './Components/DisplayListEmployee.js';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import UpdateEmployee from './Components/UpdateEmployee.js';
import second from './Components/Login.js'



function App() {


  return (<div>
    <Router>
      <Header />
      <div className="container text-center">

        <Routes>
          <Route path="/" element={<DisplayListEmployee />}></Route>
          <Route path="/employee" element={<DisplayListEmployee />}></Route>
          <Route path="/update/employee/:id" element={<UpdateEmployee />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
  )
}

export default App;
