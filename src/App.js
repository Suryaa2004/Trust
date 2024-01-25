import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Homepage from './Homepage';
import About from './About';
import Volunteer from './Volunteer';
import VolForm from './VolForm';
import Contact from './Contact';
import NoMatch from './NoMatch';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/volunteer' element={<Volunteer />}></Route>
            <Route path='/VolForm' element={<VolForm />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route element={<NoMatch />}></Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;

