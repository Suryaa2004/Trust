import React from 'react';
// import ReactDom from 'react-dom';
import Typewriter from './Typewriter';
// import banner from "./images/hero-banner.png";
import "./Home.css";
function Home() {
  return (
    <body>
       <section id='title'>

  <div className='heading '>
 

   <h1>Star Suthan Subiksham</h1>
 <h5 className='sub-title'><Typewriter text="Social Educational and Economical Development Trust" delay={75}/></h5>
 </div>
 
</section>
      
    </body>
   
  );
}

export default Home;