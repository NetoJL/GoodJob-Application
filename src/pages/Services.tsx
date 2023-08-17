import React, { useState } from "react";

import Header from "../components/Header";
import ServiceList from "../components/ServiceList";
import { useNavigate } from "react-router-dom";

import '../styles/pages/services.css'

import { ServiceProps } from '../types/services'

function Services() {

    const [services, setServices] = useState<ServiceProps[]>([] as ServiceProps[])

    const navigate = useNavigate()

    const goToScheduling = () => {
        navigate('/scheduling')
    }

    return (
        <div id='services-container'>
            <Header />
            <div id="services-list-container">
                    <ServiceList 
                    goTo={goToScheduling}
                    name="Refined Concrete Cheese"
                    description="The slim & simple Maple Gaming Keyboard
                    from Dev Byte comes with a sleek body and 7- Color RGB LED
                    Back-lighting for smart functionality"
                    length="58 minutos"
                    price="R$ 536.00"
                    professional="Gabrielle Hane"
                    availability="Saturday 14h-12h"
                    />
                    <ServiceList 
                    goTo={goToScheduling}
                    name="Gorgeous Soft Soap"
                    description="Ergonomic executive chair upholstered in bonded 
                    black leather and PVC padded seat and back for all-day 
                    comfort and support"
                    length="53 minutos"
                    price="R$ 996.00"
                    professional="Dejah Koelpin"
                    availability="Saturday 15h-13h"
                    />
            </div>
        </div>
    )
}

export default Services