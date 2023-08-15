import '../styles/components/header.css'
import React from "react";

import { useNavigate } from "react-router-dom";

import logo from '../assets/images/logoGJ.png'
import HeaderOption from "./HeaderOptions";

function Header() {

    const navigate = useNavigate()

    const goToLandingPage = () => {
        navigate('/')
    }

    const goToProfessionals = () => {
        navigate('/professionals')
    }

    const goToScheduling = () => {
        navigate('/scheduling')
    }

    const goToScheduleView = () => {
        navigate('/schedule-view')
    }

    return (
        <header id='header-container'>
            <img id='img-logo' src={logo} alt="GoodJob" onClick={goToLandingPage} />
            <div id='options'>
                <HeaderOption label='Profissionais' goTo={goToProfessionals} />
                <HeaderOption label='Agendar' goTo={goToScheduling} />
                <HeaderOption label='Agendamentos' goTo={goToScheduleView} />
            </div>
        </header>
    )
}

export default Header;