import React from "react";
import Header from "../components/Header";

import '../styles/pages/landingPage.css'

function LandingPage(){
    return(
        <div id='container'>
            <div id='header-container'>
                <Header />
            </div>
            <div id='body-container'>
                    <span>BEM-VINDO A GOODJOB</span>
                </div>
        </div>
    );
}

export default LandingPage