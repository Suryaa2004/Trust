// Volunteer.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VolForm from './VolForm';
import './Volunteer.css';
const Volunteer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the Volunteer Form page when the button is clicked
    navigate('/VolForm');
  };

  return (
    <div class="container-fluid content rounded">
       <div class="row justify-content-center mt-5">
    <div class="col-sm-12 col-md-6 col-lg-12">
      
       
    
      <h2 className='h2t'>Welcome to Volunteer Page</h2>
      <button onClick={handleClick}>Go to Volunteer Form</button>
      </div>
     
    </div>
    </div>
  );
};

export default Volunteer;
