import React from "react";

import Header from "../components/Header";
import ServiceList from "../components/ServiceList";
import { useNavigate } from "react-router-dom";

import '../styles/pages/services.css'

function Services() {

    const navigate = useNavigate()

    const goToScheduling = () => {
        navigate('./scheduling')
    }

    return (
        <div id='services-container'>
            <Header />
            <div id="services-list-container">
                <ServiceList
                    service='Refined Concrete Cheese'
                    description='The slim & simple Maple Gaming Keyboard from Dev Byte 
                    comes with a sleek body and 7- Color RGB LED Back-lighting for smart 
                    functionality'
                    availability='Saturday 14h-12h'
                    goTo={goToScheduling} />
            </div>
        </div>
    )
}

export default Services