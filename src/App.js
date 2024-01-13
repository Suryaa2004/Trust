
import React from 'react';

import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';
import './App.css';
function App() {
  return (
   <>
      <Router>
        <div>
           <NavBar/>
           <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route element={<NoMatch/>}></Route>
          </Routes>
          </div>
      </Router>

   </>
  );
}

export default App;
