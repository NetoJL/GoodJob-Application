import React from "react";

import '../styles/components/serviceList.css'

import { ServiceProps } from '../types/services'

interface ServicesProps {
    service: ServiceProps;
}

/*const ServicesList: React.FC<ServicesProps> = ({ service }) => {*/
function ServicesList(props:any) {
    return (
        <div onClick={props.goTo} id="service-list">
            <span>SERVIÇO: {props.name}</span>
            <span>DESCRIÇÃO: {props.description}</span>
            <span>DURAÇÃO: {props.length}</span>
            <span>PREÇO: {props.price}</span>
            <span>PROFISSIONAL: {props.professional}</span>
            <span>HORÁRIOS: {props.availability}</span>
        </div>
    )
}

export default ServicesList