import React from "react";
import Header from "../components/Header";

import '../styles/pages/landingPage.css'

function LandingPage() {
    return (
        <div id='container'>
            <Header />
            <div id="landing-page-container">
                <span id="welcome-span">BEM-VINDO À GOODJOB</span>
            </div>
        </div>
    );
}

export default LandingPage