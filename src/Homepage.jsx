import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Intro from "./Intro";
import Volunteer from "./Volunteer";
import Contact from "./Contact";
function Homepage() {
    return (
        <>

            {/* <NavBar/> */}
            <Home />
            <Intro />
            <div id="volunteer">
                <Volunteer />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    )

}

export default Homepage;

